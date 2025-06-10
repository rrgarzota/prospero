
const retailers = [
  { name: 'Under Armour', ss: 13.0, cs: 9.5, availableCS: true, isSuper7: false },
  { name: 'Nike', ss: 12.0, cs: 8.5, availableCS: true, isSuper7: false },
  { name: 'Athleta', ss: 11.5, cs: 8.0, availableCS: true, isSuper7: false },
  { name: 'Adidas', ss: 11.5, cs: 8.0, availableCS: true, isSuper7: false },
  { name: 'Target', ss: 5.2, cs: 0.0, availableCS: false, isSuper7: true },
  { name: 'Amazon', ss: 2.7, cs: 0.0, availableCS: false, isSuper7: true },
  { name: 'Dick\'s Sporting Goods', ss: 3.5, cs: 0.0, availableCS: false, isSuper7: false },
  { name: 'Williams-Sonoma', ss: 9.0, cs: 5.5, availableCS: true, isSuper7: false },
  { name: 'Pottery Barn', ss: 9.0, cs: 5.5, availableCS: true, isSuper7: false },
  { name: 'West Elm', ss: 7.5, cs: 4.0, availableCS: true, isSuper7: false },
  { name: 'Home Depot', ss: 5.2, cs: 0.0, availableCS: false, isSuper7: true },
  { name: 'Lowe’s', ss: 6.1, cs: 0.0, availableCS: false, isSuper7: true },
  { name: 'Ace Hardware', ss: 6.7, cs: 3.2, availableCS: true, isSuper7: false }
];

// initialize choice.js
const anchorChoices = new Choices('#anchorSelect', {
  removeItemButton: true,
  maxItemCount: 4,
  placeholderValue: 'Select up to 4 Anchors'
});

const savingsChoices = new Choices('#savingsSelect', {
  removeItemButton: true,
  maxItemCount: 4,
  placeholderValue: 'Select up to 4 Savings'
});

retailers.forEach(retailer => {
  anchorChoices.setChoices([{ value: retailer.name, label: retailer.name }], 'value', 'label', false);
  savingsChoices.setChoices([{ value: retailer.name, label: retailer.name }], 'value', 'label', false);
});

function updateDropdowns() {
  const selectedAnchors = anchorChoices.getValue(true);
  const selectedSavings = savingsChoices.getValue(true);

  const availableForAnchors = retailers
    .filter(r => !selectedSavings.includes(r.name))
    .map(r => ({ value: r.name, label: r.name }));

  const availableForSavings = retailers
    .filter(r => !selectedAnchors.includes(r.name))
    .map(r => ({ value: r.name, label: r.name }));

  anchorChoices.clearChoices();
  anchorChoices.setChoices(availableForAnchors, 'value', 'label', true);
  selectedAnchors.forEach(value => {
    anchorChoices.setChoiceByValue(value);
  });

  savingsChoices.clearChoices();
  savingsChoices.setChoices(availableForSavings, 'value', 'label', true);
  selectedSavings.forEach(value => {
    savingsChoices.setChoiceByValue(value);
  });
}

anchorChoices.passedElement.element.addEventListener('change', updateDropdowns);
savingsChoices.passedElement.element.addEventListener('change', updateDropdowns);

// generate combos
function generateCombos() {
  const selectedAnchors = anchorChoices.getValue(true);
  const selectedSavings = savingsChoices.getValue(true);

  const comboResults = document.getElementById('comboResults');
  comboResults.innerHTML = '';

  const summarySection = document.getElementById('summarySection');

  document.getElementById('comboAlert').style.display = 'none';
  document.querySelector('.comboResultTable').style.display = 'none';

  const combos = [];

  selectedAnchors.forEach(anchorName => {
    const anchor = retailers.find(r => r.name === anchorName);

    selectedSavings.forEach(savingsName => {
      const savings = retailers.find(r => r.name === savingsName);

      const ssCombo = anchor.ss + savings.ss;

      let csCombo = 0;
      const useSSForCS = document.getElementById('useSSForCS').checked;

      if (!savings.availableCS) {
        csCombo = (anchor.ss - 3.5) + savings.ss;
      } else {
        if (useSSForCS) {
          csCombo = (anchor.ss - 3.5) + savings.ss;
        } else {
          csCombo = (anchor.ss - 3.5) + savings.cs;
        }
      }

      combos.push({
        anchor: anchor.name,
        savings: savings.name,
        ssCombo: ssCombo,
        csCombo: csCombo
      });

      const row = document.createElement('tr');
      row.style.borderBottom = "1px solid #ddd";
      row.innerHTML = `
        <td>${anchor.name}</td>
        <td>${savings.name}</td>
        <td>
          <span class="blue">${anchor.ss.toFixed(2)}%</span> + 
          <span class="blue">${savings.ss.toFixed(2)}%</span>
        </td>
        <td>
          <span class="green">${(anchor.ss - 3.5).toFixed(2)}%</span> + 
          <span class="${(!savings.availableCS || useSSForCS) ? 'blue' : 'green'}">
            ${(useSSForCS || !savings.availableCS) ? savings.ss.toFixed(2) : savings.cs.toFixed(2)}%
          </span>
        </td>
        <td>${ssCombo.toFixed(2)}%</td>
        <td>${csCombo.toFixed(2)}%</td>
      `;
      comboResults.appendChild(row);
    });
  });

  if (combos.length > 0) {
    summarySection.style.display = 'block';

    const ssHighest = combos.reduce((max, combo) => combo.ssCombo > max.ssCombo ? combo : max, combos[0]);
    const ssLowest = combos.reduce((min, combo) => combo.ssCombo < min.ssCombo ? combo : min, combos[0]);

    const csHighest = combos.reduce((max, combo) => combo.csCombo > max.csCombo ? combo : max, combos[0]);
    const csLowest = combos.reduce((min, combo) => combo.csCombo < min.csCombo ? combo : min, combos[0]);

    const suggestedSSCombo = Math.floor(ssLowest.ssCombo);
    const suggestedCSCombo = Math.floor(csLowest.csCombo);

    // Read GapFactor for SS
    const gapFactorInput = document.getElementById('gapFactorInput').value;
    const gapFactor = parseFloat(gapFactorInput) / 100;

    // Read GapFactor for CS
    const gapFactorCSInput = document.getElementById('gapFactorCSInput').value;
    const gapFactorCS = parseFloat(gapFactorCSInput) / 100;

    // 🚀 Pass BOTH GapFactors to runGapFactorAdjustment!
    runGapFactorAdjustment(suggestedSSCombo, suggestedCSCombo, gapFactor, gapFactorCS);


    document.getElementById('ssHighest').innerText = `${ssHighest.ssCombo.toFixed(2)}% \n${ssHighest.anchor} + ${ssHighest.savings}`;
    document.getElementById('ssLowest').innerText = `${ssLowest.ssCombo.toFixed(2)}% \n${ssLowest.anchor} + ${ssLowest.savings}`;
    document.getElementById('ssCombo').innerText = `${suggestedSSCombo}%`;

    document.getElementById('csHighest').innerText = `${csHighest.csCombo.toFixed(2)}% \n${csHighest.anchor} + ${csHighest.savings}`;
    document.getElementById('csLowest').innerText = `${csLowest.csCombo.toFixed(2)}% \n${csLowest.anchor} + ${csLowest.savings}`;
    document.getElementById('csCombo').innerText = `${suggestedCSCombo}%`;

  } else {
    summarySection.style.display = 'none';
    document.getElementById('adjustmentSection').style.display = 'none'; // hide adjustments too if empty
  }
}

// Gap factor adjustment
function runGapFactorAdjustment(SSCombo, CSCombo, gapFactor, gapFactorCS) {
  const selectedAnchors = anchorChoices.getValue(true);
  const selectedSavings = savingsChoices.getValue(true);

  const anchors = retailers.filter(r => selectedAnchors.includes(r.name));
  const savings = retailers.filter(r => selectedSavings.includes(r.name));

  if (anchors.length === 0 || savings.length === 0) return;

  let anchorResults = {};
  let savingsResults = {};

  anchors.forEach(a => {
    anchorResults[a.name] = { SSADJ: a.ss, CSADJ: a.cs };
  });
  savings.forEach(s => {
    savingsResults[s.name] = { SSADJ: s.ss, CSADJ: s.cs };
  });

  anchors.forEach(anchor => {
    savings.forEach(saving => {
      let currentSumSS = anchor.ss + saving.ss;
      let gapSS = currentSumSS * gapFactor;
      let targetMaxSS = SSCombo - gapSS;
      let adjustmentNeededSS = currentSumSS - targetMaxSS;

      let anchorSSAdj = anchor.ss;
      let savingSSAdj = saving.ss;

      if (adjustmentNeededSS > 0) {
        if (anchor.isSuper7 && saving.isSuper7) {
          // skip
        } else if (anchor.isSuper7) {
          savingSSAdj = saving.ss - adjustmentNeededSS;
        } else if (saving.isSuper7) {
          anchorSSAdj = anchor.ss - adjustmentNeededSS;
        } else {
          let perCardAdj = adjustmentNeededSS / 2;
          anchorSSAdj = anchor.ss - perCardAdj;
          savingSSAdj = saving.ss - perCardAdj;
        }

        anchorSSAdj = Math.max(0, anchorSSAdj);
        savingSSAdj = Math.max(0, savingSSAdj);
      }

      if (!anchor.isSuper7 && anchorSSAdj < anchorResults[anchor.name].SSADJ) {
        anchorResults[anchor.name].SSADJ = anchorSSAdj;
      }
      if (!saving.isSuper7 && savingSSAdj < savingsResults[saving.name].SSADJ) {
        savingsResults[saving.name].SSADJ = savingSSAdj;
      }

      // === Weighted CS Adjustment ===
      if (anchor.availableCS && saving.availableCS) {
        let originalAnchorCS = anchor.cs;
        let originalSavingCS = saving.cs;
        let sumOriginal = originalAnchorCS + originalSavingCS;

        let anchorWeight = originalAnchorCS / sumOriginal;
        let savingWeight = originalSavingCS / sumOriginal;

        let currentSumCS = anchorResults[anchor.name].CSADJ + savingsResults[saving.name].CSADJ;
        let gapCS = currentSumCS * gapFactorCS;
        let targetMaxCS = CSCombo - gapCS;
        let adjustmentNeededCS = currentSumCS - targetMaxCS;

        let anchorCSAdj = anchorResults[anchor.name].CSADJ;
        let savingCSAdj = savingsResults[saving.name].CSADJ;

        if (adjustmentNeededCS > 0) {
          anchorCSAdj -= adjustmentNeededCS * anchorWeight;
          savingCSAdj -= adjustmentNeededCS * savingWeight;

          anchorCSAdj = Math.max(0, anchorCSAdj);
          savingCSAdj = Math.max(0, savingCSAdj);
        }

        anchorResults[anchor.name].CSADJ = anchorCSAdj;
        savingsResults[saving.name].CSADJ = savingCSAdj;
      }
      else if (anchor.availableCS && !saving.availableCS) {
        let savingsEffectiveSS = savingsResults[saving.name].SSADJ;
        let targetMaxCS = CSCombo - savingsEffectiveSS - (CSCombo * gapFactorCS);

        let anchorCSAdj = anchorResults[anchor.name].CSADJ;
        if (anchorCSAdj > targetMaxCS) {
          anchorCSAdj = Math.max(0, targetMaxCS);
          anchorResults[anchor.name].CSADJ = anchorCSAdj;
        }
      }
    });
  });


  // === Build Combined Adjustments Table ===
  const combinedTable = document.getElementById('combinedAdjustments');
  combinedTable.innerHTML = '';

  anchors.forEach(a => {
    combinedTable.innerHTML += `
      <tr style="border-bottom: 1px solid #ddd;">
        <td>Anchor</td>
        <td>${a.name}</td>
        <td>${a.ss.toFixed(2)}%</td>
        <td>${a.availableCS ? a.cs.toFixed(2) + '%' : 'N/A'}</td>
        <td>${anchorResults[a.name].SSADJ.toFixed(2)}%</td>
        <td>${a.availableCS ? anchorResults[a.name].CSADJ.toFixed(2) + '%' : 'N/A'}</td>
      </tr>
    `;
  });


  savings.forEach(s => {
    combinedTable.innerHTML += `
      <tr style="border-bottom: 1px solid #ddd;">
        <td>Savings</td>
        <td>${s.name}</td>
        <td>${s.ss.toFixed(2)}%</td>
        <td>${s.availableCS ? s.cs.toFixed(2) + '%' : 'N/A'}</td>
        <td>${savingsResults[s.name].SSADJ.toFixed(2)}%</td>
        <td>${s.availableCS ? savingsResults[s.name].CSADJ.toFixed(2) + '%' : 'N/A'}</td>
      </tr>
    `;
  });

  // === Adjustment Chart calculation ===
  let highestAnchorSSADJ = Math.max(...anchors.map(a => anchorResults[a.name].SSADJ));
  let highestSavingsSSADJ = Math.max(...savings.map(s => savingsResults[s.name].SSADJ));
  let individualSSMax = highestAnchorSSADJ + highestSavingsSSADJ;

  let highestAnchorCSADJ = Math.max(...anchors.map(a => anchorResults[a.name].CSADJ));
  let highestSavingsEffectiveCS = Math.max(...savings.map(s => {
    return s.availableCS ? savingsResults[s.name].CSADJ : savingsResults[s.name].SSADJ;
  }));
  let individualCSMax = highestAnchorCSADJ + highestSavingsEffectiveCS;
  // === Determine top anchor for SS:
  // let topAnchorSS = anchors.find(a => anchorResults[a.name].SSADJ === highestAnchorSSADJ)?.name || '';

  // === Determine top savings for SS:
  // let topSavingsSS = savings.find(s => savingsResults[s.name].SSADJ === highestSavingsSSADJ)?.name || '';

  // Anchors with highest SS ADJ %
  let topAnchorSSList = anchors
    .filter(a => anchorResults[a.name].SSADJ === highestAnchorSSADJ)
    .map(a => a.name);

  // Savings with highest SS ADJ %
  let topSavingsSSList = savings
    .filter(s => savingsResults[s.name].SSADJ === highestSavingsSSADJ)
    .map(s => s.name);


  // === Determine top anchor for CS:
  // let topAnchorCS = anchors.find(a => anchorResults[a.name].CSADJ === highestAnchorCSADJ)?.name || '';

  // === Determine top savings for CS (effective):
  // let topSavingsCS = savings.find(s => {
  //     let value = s.availableCS ? savingsResults[s.name].CSADJ : savingsResults[s.name].SSADJ;
  //     return value === highestSavingsEffectiveCS;
  // })?.name || '';

  // Anchors with highest CS ADJ %
  let topAnchorCSList = anchors
    .filter(a => anchorResults[a.name].CSADJ === highestAnchorCSADJ)
    .map(a => a.name);

  // Savings with highest effective CS
  let topSavingsCSList = savings
    .filter(s => {
      let value = s.availableCS ? savingsResults[s.name].CSADJ : savingsResults[s.name].SSADJ;
      return value === highestSavingsEffectiveCS;
    })
    .map(s => s.name);



  // === Determine allSavingsNA logic ===
  let allSavingsNA = savings.every(s => !s.availableCS);

  // === Determine savingsEffectiveSource (for explanation) ===
  let savingsEffectiveSource = "";
  let savingsEffectiveValue = 0;
  let savingsEffectiveDisplay = "";

  savings.forEach(s => {
    let value = s.availableCS ? savingsResults[s.name].CSADJ : savingsResults[s.name].SSADJ;
    if (value === highestSavingsEffectiveCS) {
      savingsEffectiveSource = s.name;
      savingsEffectiveValue = value;

      if (allSavingsNA) {
        savingsEffectiveDisplay = `N/A`;
      } else {
        if (s.availableCS) {
          savingsEffectiveDisplay = `${savingsEffectiveValue.toFixed(2)}%`;
        } else {
          savingsEffectiveDisplay = `N/A`;
        }
      }
    }
  });

  // === Populate Adjustment Chart ===
  // SuperSaver:
  document.getElementById('chartSSCombo').innerText = `${SSCombo.toFixed(2)}%`;
  document.getElementById('chartSSIndividual').innerText = `${individualSSMax.toFixed(2)}%`;
  document.getElementById('chartSSTopRetailers').innerHTML = `
  <strong>Anchors:</strong> ${topAnchorSSList.join(", ")}<br>
  <strong>Savings:</strong> ${topSavingsSSList.join(", ")}
`;

  // ClubSaver:
  document.getElementById('chartCSCombo').innerText = `${CSCombo.toFixed(2)}%`;
  document.getElementById('chartCSIndividual').innerText = `${individualCSMax.toFixed(2)}%`;
  document.getElementById('chartCSTopRetailers').innerHTML = `
  <strong>Anchors:</strong> ${topAnchorCSList.join(", ")}<br>
  <strong>Savings:</strong> ${topSavingsCSList.join(", ")}
`;



  // === Populate Explanation with live values ===
  document.getElementById('chartExplanationContent').innerHTML = `
    <p style="margin-bottom: 8px;">
      <strong>How "Individual Card Max %" is calculated:</strong><br>
      This shows the best % a member could get by buying cards individually (instead of as a combo).<br>
      Formula = Highest Anchor % + Highest Savings % (after adjustments).<br><br>
      <u>SuperSaver:</u> ${highestAnchorSSADJ.toFixed(2)}% + ${highestSavingsSSADJ.toFixed(2)}% = ${individualSSMax.toFixed(2)}%<br><br>
      <u>ClubSaver:</u> ${highestAnchorCSADJ.toFixed(2)}% + Savings %:<br>
      &nbsp; - If Savings is not CS-available → use SS ADJ % (${savingsEffectiveValue.toFixed(2)}%)<br>
      &nbsp; - If Savings is CS-available → use CS ADJ % (${savingsEffectiveDisplay})<br>
      Final: ${highestAnchorCSADJ.toFixed(2)}% + ${savingsEffectiveValue.toFixed(2)}% = ${individualCSMax.toFixed(2)}%
    </p>
  `;

  // === Show the chart ===
  document.getElementById('adjustmentSection').style.display = 'block';
  document.getElementById('adjustmentChartSection').style.display = 'block';
  // Show the combo results table
  document.querySelector('.comboResultTable').style.display = 'table';

}


function toggleGapFactorExplanation() {
  const content = document.getElementById('gapFactorExplanationContent');
  const button = event.target;

  if (content.style.display === 'none') {
    content.style.display = 'block';
    button.textContent = 'Show Less ▲';
  } else {
    content.style.display = 'none';
    button.textContent = 'Show More ▼';
  }
}

function toggleChartExplanation() {
  const content = document.getElementById('chartExplanationContent');
  const button = event.target;

  if (content.style.display === 'none') {
    content.style.display = 'block';
    button.textContent = 'Show Less ▲';
  } else {
    content.style.display = 'none';
    button.textContent = 'Show More ▼';
  }
}

function toggleCSJPercentExplanation() {
  const content = document.getElementById('CSPercentContent');
  const button = event.target;

  if (content.style.display === 'none') {
    content.style.display = 'block';
    button.textContent = 'Show Less ▲';
  } else {
    content.style.display = 'none';
    button.textContent = 'Show More ▼';
  }
}

function togglecardAdjExplanation() {
  const content = document.getElementById('cardAdjContent');
  const button = event.target;

  if (content.style.display === 'none') {
    content.style.display = 'block';
    button.textContent = 'Show Less ▲';
  } else {
    content.style.display = 'none';
    button.textContent = 'Show More ▼';
  }
}

function toggleCSSSExplanation() {
  const content = document.getElementById('ssCsContent');
  const button = event.target;

  if (content.style.display === 'none') {
    content.style.display = 'block';
    button.textContent = 'Show Less ▲';
  } else {
    content.style.display = 'none';
    button.textContent = 'Show More ▼';
  }
}

function toggleComboExplanation() {
  const content = document.getElementById('ssComboContent');
  const button = event.target;

  if (content.style.display === 'none') {
    content.style.display = 'block';
    button.textContent = 'Show Less ▲';
  } else {
    content.style.display = 'none';
    button.textContent = 'Show More ▼';
  }
}