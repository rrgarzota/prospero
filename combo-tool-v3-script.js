const cards = [
    { Name: 'Ace Hardware', SS: 6.7, CS: 3.2, availableCS: true, Super7: false, adjustable: true, Category: ['Home'], Tier: 'SuperSaver,ClubSaver' },
    { Name: 'Adidas', SS: 11.5, CS: 8.0, availableCS: true, Super7: false, adjustable: true, Category: ['Sports', 'Fashion'], Tier: 'SuperSaver,ClubSaver' },
    { Name: 'Amazon', SS: 2.7, CS: 0.0, availableCS: false, Super7: true, adjustable: false, Category: ['Entertainment', 'Fashion', 'Home', 'Sports', 'Auto', 'Super 7', 'Pharmacy', 'Grocery', 'Pets'], Tier: 'SuperSaver' },
    { Name: 'Athleta', SS: 11.5, CS: 8.0, availableCS: true, Super7: false, adjustable: true, Category: ['Sports', 'Fashion'], Tier: 'SuperSaver,ClubSaver' },
    { Name: 'Lowe’s', SS: 6.1, CS: 0.0, availableCS: false, Super7: true, adjustable: false, Category: ['Home', 'Auto', 'Super 7', 'Pets'], Tier: 'SuperSaver' },
    { Name: 'Nike', SS: 12.0, CS: 8.5, availableCS: true, Super7: false, adjustable: true, Category: ['Sports', 'Fashion'], Tier: 'SuperSaver,ClubSaver' },
    { Name: 'Pottery Barn', SS: 9.0, CS: 5.5, availableCS: true, Super7: false, adjustable: true, Category: ['Home'], Tier: 'SuperSaver,ClubSaver' },
    { Name: 'Target', SS: 5.2, CS: 0.0, availableCS: false, Super7: true, adjustable: false, Category: ['Grocery', 'Entertainment', 'Fashion', 'Home', 'Super 7', 'Sports', 'Pharmacy', 'Pets'], Tier: 'SuperSaver' },
    { Name: 'The Home Depot', SS: 5.2, CS: 0.0, availableCS: false, Super7: true, adjustable: false, Category: ['Home', 'Auto', 'Super 7', 'Pets'], Tier: 'SuperSaver' },
    { Name: 'Under Armour', SS: 13.0, CS: 9.5, availableCS: true, Super7: false, adjustable: true, Category: ['Sports'], Tier: 'SuperSaver,ClubSaver' },
    { Name: 'West Elm', SS: 7.5, CS: 4.0, availableCS: true, Super7: false, adjustable: true, Category: ['Home'], Tier: 'SuperSaver,ClubSaver' },
    { Name: 'Instacart', SS: 5.50, CS: 0.0, availableCS: false, Super7: false, adjustable: false, Category: ['Grocery', 'Pharmacy', 'Pets'], Tier: 'SuperSaver' },
    { Name: 'Williams-Sonoma', SS: 9.0, CS: 5.5, availableCS: true, Super7: false, adjustable: true, Category: ['Home'], Tier: 'SuperSaver,ClubSaver' }
];


const categories = ['Auto', 'Dining', 'Entertainment', 'Fashion', 'Gasoline', 'Grocery', 'Home', 'Pets', 'Pharmacy', 'Sport', 'Super 7', 'Travel'];
const categoryDropdown = document.getElementById("categoryDropdown");
categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoryDropdown.appendChild(opt);
});
const categoryChoices = new Choices('#categoryDropdown', { removeItemButton: true });

function getSelectedCategories() {
    return categoryChoices.getValue(true);
}

function generateCombos() {
    document.getElementById("manualSection").style.display = "block";

    const useSSFallback = document.getElementById("useSSForCS").checked;
    const minThreshold = parseFloat(document.getElementById("threshold").value);
    const selectedCategories = getSelectedCategories();
    const selectedTiersRaw = document.getElementById("tierFilter").value;
    const selectedTiers = selectedTiersRaw === 'Both' ? ['SuperSaver', 'ClubSaver'] : [selectedTiersRaw];


    const filteredCards = cards.filter(card => {
        const matchCategory = selectedCategories.length === 0 || card.Category.some(cat => selectedCategories.includes(cat));
        const matchTier = selectedTiers.some(tier => card.Tier.includes(tier));
        return matchCategory && matchTier;
    });

    const combos = [];
    for (let i = 0; i < filteredCards.length; i++) {
        for (let j = 0; j < filteredCards.length; j++) {
            if (i === j) continue;
            const a = filteredCards[i];
            const s = filteredCards[j];
            if (a.Super7) continue;
            if (s.Super7 && !s.Category.some(cat => selectedCategories.includes(cat))) continue;

            const anchorSS = a.SS;
            const savingsSS = s.SS;
            const ssCombo = anchorSS + savingsSS;

            let csCombo = 0;
            let csBreakdown = "";
            if (s.availableCS && !useSSFallback) {
                csCombo = a.CS + s.CS;
                csBreakdown = `<span class='cs-color'>(<span class='cs-color'>${a.CS}%</span> + <span class='cs-color'>${s.CS}%</span>) = <strong>${csCombo.toFixed(2)}%</strong></span>`;
            } else {
                csCombo = a.CS + s.SS;
                csBreakdown = `<span class='cs-color'>(<span class='cs-color'>${a.CS}%</span> + <span class='ss-color'>${s.SS}%</span>) = <strong>${csCombo.toFixed(2)}%</strong></span>`;
            }

            const ssRating = (ssCombo >= minThreshold + 5) ? 'Excellent' : (ssCombo >= minThreshold ? 'Good' : 'Needs Review');
            const csRating = (csCombo >= minThreshold + 5) ? 'Excellent' : (csCombo >= minThreshold ? 'Good' : 'Needs Review');

            if (ssRating !== 'Needs Review' || csRating !== 'Needs Review') {
                combos.push({
                    anchor: a.Name,
                    savings: s.Name,
                    ssCombo: ssCombo.toFixed(2),
                    csCombo: csCombo.toFixed(2),
                    ssBreakdown: `<span class='ss-color'>(<span class='ss-color'>${anchorSS}%</span> + <span class='ss-color'>${savingsSS}%</span>) = <strong>${ssCombo.toFixed(2)}%</strong></span>`,
                    csBreakdown,
                    ssRating,
                    csRating
                });
            }
        }
    }

    const groupedCombos = {};
    combos.forEach(combo => {
        if (!groupedCombos[combo.anchor]) groupedCombos[combo.anchor] = [];
        groupedCombos[combo.anchor].push(combo);
    });

    window.allCombos = combos;
    const container = document.getElementById("results");
    container.innerHTML = `<h2 class="mb-3">Results (${combos.length})</h2>`;

    // Reset manual anchor/savings selections and their outputs
    anchorSelect.clearStore();
    savingsSelect.clearStore();
    document.getElementById('anchorSelect').innerHTML = '';
    document.getElementById('savingsSelect').innerHTML = '';
    manualSummary.innerHTML = '';

    if (combos.length > 0) {
        let table = `<table class="table table-bordered"><thead><tr><th>Anchor</th><th>Savings</th><th>SS Combo</th><th>CS Combo</th><th>SS Rating</th><th>CS Rating</th></tr></thead><tbody>`;
        Object.keys(groupedCombos).forEach(anchor => {
            table += `<tr class='table-info'><td colspan='6'><strong>${anchor}</strong></td></tr>`;
            groupedCombos[anchor].forEach(combo => {
                const ssBadge = combo.ssRating === 'Excellent'
                    ? "<span class='badge bg-success'>Excellent</span>"
                    : combo.ssRating === 'Good'
                        ? "<span class='badge bg-primary'>Good</span>"
                        : "<span class='badge bg-warning text-dark'>Needs Review</span>";

                const csBadge = combo.csRating === 'Excellent'
                    ? "<span class='badge bg-success'>Excellent</span>"
                    : combo.csRating === 'Good'
                        ? "<span class='badge bg-primary'>Good</span>"
                        : "<span class='badge bg-warning text-dark'>Needs Review</span>";

                table += `<tr>
      <td>${combo.anchor}</td>
      <td>${combo.savings}</td>
      <td>${combo.ssBreakdown}</td>
      <td>${combo.csBreakdown}</td>
      <td>${ssBadge}</td>
      <td>${csBadge}</td>
    </tr>`;
            });
        });
        table += '</tbody></table>';
        container.innerHTML += table;
    } else {
        container.innerHTML += '<div class="alert alert-warning">No valid combos found.</div>';
    }

    summarizeCombos(combos, minThreshold);

    document.getElementById("singleAdjustmentSection").style.display = "none";

}

const summaryContainer = document.getElementById("summary");
const manualSummary = document.getElementById("manualSummary");
let anchorSelect, savingsSelect;

document.addEventListener("DOMContentLoaded", () => {
    anchorSelect = new Choices('#anchorSelect', { removeItemButton: true });
    savingsSelect = new Choices('#savingsSelect', { removeItemButton: true });
});


function summarizeCombos(combos, minThreshold) {
    const comboCounts = {}; // ✅ Fix added here

    combos.forEach(combo => {
        const bothGoodOrBetter =
            parseFloat(combo.ssCombo) >= minThreshold &&
            parseFloat(combo.csCombo) >= minThreshold;
        if (!bothGoodOrBetter) return;
        [combo.anchor, combo.savings].forEach(card => {
            comboCounts[card] = (comboCounts[card] || 0) + 1;
        });
    });

    const sharedRetailers = Object.keys(comboCounts);
    let html = `<h3 class="mt-5">Suggested Retailers (Good for Both SS and CS)</h3>`;
    html += `<ul>${sharedRetailers.map(card => `<li>${card}</li>`).join('')}</ul>`;
    summaryContainer.innerHTML = html;

    // Group pairings by anchor card
    const grouped = {};
    combos.forEach(combo => {
        const ssComboVal = parseFloat(combo.ssCombo);
        const csComboVal = parseFloat(combo.csCombo);
        if (ssComboVal >= minThreshold && csComboVal >= minThreshold) {
            if (!grouped[combo.anchor]) grouped[combo.anchor] = [];
            grouped[combo.anchor].push(combo);
        }
    });

    let pairingsTable = `<h4 class='mt-4'>Qualified Pairings (Proof)</h4>`;
    pairingsTable += `<table class='table table-striped'><thead><tr><th>Anchor</th><th>Savings</th><th>SS Combo</th><th>CS Combo</th><th>SS Rating</th><th>CS Rating</th></tr></thead><tbody>`;

    // Calculate which savings cards appear in all anchor pairings
    const allSavings = Object.values(grouped)
        .flat()
        .map(c => c.savings);
    const savingsCount = {};
    allSavings.forEach(card => {
        savingsCount[card] = (savingsCount[card] || 0) + 1;
    });

    const anchorCount = Object.keys(grouped).length;
    const globalSavings = Object.entries(savingsCount)
        .filter(([_, count]) => count === anchorCount)
        .map(([card]) => card);

    for (const anchor in grouped) {
        pairingsTable += `<tr class='table-info'><td colspan='6'><strong>${anchor}</strong></td></tr>`;
        grouped[anchor].forEach(combo => {
            const highlight = globalSavings.includes(combo.savings)
                ? "highlight-savings"
                : "";

            const ssBadge = combo.ssRating === 'Excellent'
                ? "<span class='badge bg-success'>Excellent</span>"
                : combo.ssRating === 'Good'
                    ? "<span class='badge bg-primary'>Good</span>"
                    : "<span class='badge bg-warning text-dark'>Needs Review</span>";

            const csBadge = combo.csRating === 'Excellent'
                ? "<span class='badge bg-success'>Excellent</span>"
                : combo.csRating === 'Good'
                    ? "<span class='badge bg-primary'>Good</span>"
                    : "<span class='badge bg-warning text-dark'>Needs Review</span>";

            pairingsTable += `<tr class="${highlight}">
<td>${combo.anchor}</td>
<td>${combo.savings}</td>
<td>${combo.ssCombo}%</td>
<td>${combo.csCombo}%</td>
<td>${ssBadge}</td>
<td>${csBadge}</td>
</tr>`;
        });
    }

    pairingsTable += '</tbody></table>';
    summaryContainer.innerHTML += pairingsTable;

    // Also trigger dropdown filtering
    updateAnchorSavingsDropdowns(new Set(Object.keys(comboCounts)), combos);
}


function updateAnchorSavingsDropdowns(qualifiedRetailers, combos) {
    const anchorMap = {};
    const savingsMap = {};
    const qualifiedAnchors = new Set();

    combos.forEach(combo => {
        if (['Good', 'Excellent'].includes(combo.ssRating) && ['Good', 'Excellent'].includes(combo.csRating)) {
            qualifiedAnchors.add(combo.anchor);
            if (!anchorMap[combo.anchor]) anchorMap[combo.anchor] = new Set();
            anchorMap[combo.anchor].add(combo.savings);
        }
    });

    const allQualified = Array.from(new Set(combos.flatMap(c => [c.anchor, c.savings]))).sort();
    const anchorOptions = Array.from(qualifiedAnchors).sort().map(r => ({ value: r, label: r }));
    anchorSelect.clearChoices();
    anchorSelect.setChoices(anchorOptions, 'value', 'label', true);

    savingsSelect.clearChoices();
    savingsSelect.setChoices(allQualified.map(r => ({ value: r, label: r })), 'value', 'label', true);

    document.getElementById('anchorSelect').addEventListener('change', () => {
        const selectedAnchors = Array.from(document.getElementById('anchorSelect').selectedOptions).map(o => o.value);

        let intersection = null;
        selectedAnchors.forEach(anchor => {
            const savingsSet = anchorMap[anchor] || new Set();
            if (intersection === null) {
                intersection = new Set(savingsSet);
            } else {
                intersection = new Set([...intersection].filter(x => savingsSet.has(x)));
            }
        });

        const filteredSavings = [...(intersection || allQualified)].filter(r => !selectedAnchors.includes(r));
        savingsSelect.clearChoices();
        savingsSelect.setChoices(filteredSavings.map(r => ({ value: r, label: r })), 'value', 'label', true);
    });

    document.getElementById('savingsSelect').addEventListener('change', () => {
        const selectedSavings = Array.from(document.getElementById('savingsSelect').selectedOptions).map(o => o.value);
        const filteredAnchors = [...qualifiedAnchors].filter(r => !selectedSavings.includes(r));
        anchorSelect.clearChoices();
        anchorSelect.setChoices(filteredAnchors.map(r => ({ value: r, label: r })), 'value', 'label', true);
    });
}

function applyManualSelection() {
    const selectedAnchors = Array.from(document.getElementById('anchorSelect').selectedOptions).map(o => o.value);
    const selectedSavings = Array.from(document.getElementById('savingsSelect').selectedOptions).map(o => o.value);
    const threshold = parseFloat(document.getElementById("threshold").value);

    const combos = window.allCombos || [];
    const filtered = combos.filter(c => selectedAnchors.includes(c.anchor) && selectedSavings.includes(c.savings));

    if (filtered.length === 0) {
        manualSummary.innerHTML = '<div class="alert alert-warning">No combos found for selected cards.</div>';
        return;
    }

    const ssCombos = filtered.map(c => parseFloat(c.ssCombo));
    const csCombos = filtered.map(c => parseFloat(c.csCombo));
    const minSS = Math.min(...ssCombos);
    const maxSS = Math.max(...ssCombos);
    const minCS = Math.min(...csCombos);
    const maxCS = Math.max(...csCombos);

    const suggestedSS = minSS.toFixed(2);
    const suggestedCS = minCS.toFixed(2);

    // Manual Combo Table
    let tableHTML = `<h5>Manual Combo Table</h5><table class="table table-bordered"><thead><tr>
<th>Anchor</th><th>Savings</th><th>SS Combo %</th><th>CS Combo %</th>
</tr></thead><tbody>`;
    filtered.forEach(c => {
        tableHTML += `<tr>
<td>${c.anchor}</td>
<td>${c.savings}</td>
<td class="ss-color">${c.ssCombo}%</td>
<td class="cs-color">${c.csCombo}%</td>
</tr>`;
    });
    tableHTML += `</tbody></table>`;

    // Manual Combo Summary (Suggested = Lowest)
    tableHTML += `<h5>Manual Combo Summary</h5><table class="table table-bordered">
<thead><tr><th></th><th>Lowest</th><th>Highest</th><th>Suggested</th></tr></thead><tbody>
<tr><td>SS Combo %</td><td>${minSS.toFixed(2)}%</td><td>${maxSS.toFixed(2)}%</td><td>${suggestedSS}%</td></tr>
<tr><td>CS Combo %</td><td>${minCS.toFixed(2)}%</td><td>${maxCS.toFixed(2)}%</td><td>${suggestedCS}%</td></tr>
</tbody></table>`;

    manualSummary.innerHTML = tableHTML;

    window.manualCombos = filtered;
    window.manualSuggested = {
        ss: parseFloat(suggestedSS),
        cs: parseFloat(suggestedCS)
    };

    // Show adjustment section
    document.getElementById("adjustedCardResults").innerHTML = "";
    document.getElementById("singleAdjustmentSection").style.display = "block";



}

function getComboSource(combos, targetVal, key) {
    const match = combos.find(c => parseFloat(c[key]) === targetVal);
    return match ? `<span class="text-muted small">${match.anchor} + ${match.savings}</span>` : '';
}


function adjustSingleCards() {
    const gapFactor = parseFloat(document.getElementById("gapFactor").value); // % of original to reduce
    const maxReduction = parseFloat(document.getElementById("maxReduction").value);
  
    const selectedCombos = window.manualCombos || [];
    const usedCardNames = new Set();
    selectedCombos.forEach(c => {
      usedCardNames.add(c.anchor);
      usedCardNames.add(c.savings);
    });
  
    const rows = [];
    usedCardNames.forEach(cardName => {
      const card = cards.find(c => c.Name === cardName);
      const adjustable = card.adjustable;
      const locked = !adjustable || card.Super7;
  
      const result = {
        name: card.Name,
        originalSS: card.SS,
        originalCS: card.CS,
        adjustedSS: card.SS,
        adjustedCS: card.availableCS ? card.CS : null,
        ssReduction: 0,
        csReduction: null,
        status: locked ? "Locked" : "Adjusted"
      };
  
      if (!locked) {
        const rawSSReduction = card.SS * (gapFactor / 100);
        const appliedSSReduction = Math.min(rawSSReduction, maxReduction);
        result.adjustedSS = Math.max(card.minSS || 2, card.SS - appliedSSReduction);
        result.ssReduction = appliedSSReduction;
  
        if (card.availableCS) {
          const rawCSReduction = card.CS * (gapFactor / 100);
          const appliedCSReduction = Math.min(rawCSReduction, maxReduction);
          result.adjustedCS = Math.max(card.minCS || 2, card.CS - appliedCSReduction);
          result.csReduction = appliedCSReduction;
        }
      }
  
      rows.push(result);
    });
  
    const anchorNames = new Set(selectedCombos.map(c => c.anchor));
    const savingsNames = new Set(selectedCombos.map(c => c.savings));
  
    let html = `<h5>Adjusted Individual Values</h5><table class="table table-bordered">
      <thead><tr>
        <th>Card</th><th>Original SS%</th><th>Adjusted SS%</th>
        <th>Original CS%</th><th>Adjusted CS%</th><th>Status & Details</th>
      </tr></thead><tbody>`;
  
    let rowIndex = 0;
  
    // Helper to build rows
    function buildCardRow(r, group) {
      const detailId = `details-${rowIndex++}`;
      return `
        <tr>
          <td>${r.name}</td>
          <td>${r.originalSS.toFixed(2)}%</td>
          <td>${r.adjustedSS.toFixed(2)}%<br><small>(${r.originalSS.toFixed(2)}% - ${r.ssReduction.toFixed(2)}%)</small></td>
          <td>${r.originalCS.toFixed(2)}%</td>
          <td>${r.adjustedCS !== null
            ? `${r.adjustedCS.toFixed(2)}%<br><small>(${r.originalCS.toFixed(2)}% - ${r.csReduction.toFixed(2)}%)</small>`
            : '<span class="text-muted">N/A</span>'}</td>
          <td>
            ${r.status === 'Locked'
              ? '<span class="badge bg-secondary">Locked</span>'
              : '<span class="badge bg-success">Adjusted</span>'}
            <br>
            <button class="btn btn-sm btn-link p-0 mt-1" data-bs-toggle="collapse" data-bs-target="#${detailId}">
              Show Details
            </button>
          </td>
        </tr>
        <tr class="collapse" id="${detailId}">
          <td colspan="6">
            <div class="bg-light p-2 rounded">
              <strong>SS%</strong><br>
              Original SS%: ${r.originalSS.toFixed(2)}%<br>
              Raw Reduction (Original × Gap): (${r.originalSS.toFixed(2)}% × ${gapFactor.toFixed(2)}%) = ${(r.originalSS * gapFactor / 100).toFixed(2)}%<br>
              Max Reduction Allowed: ${maxReduction.toFixed(2)}%<br>
              Final Reduction Applied: ${r.ssReduction.toFixed(2)}%<br>
              Adjusted SS%: ${r.adjustedSS.toFixed(2)}%<br><br>
  
              <strong>CS%</strong><br>
              ${r.adjustedCS !== null
                ? `Original CS%: ${r.originalCS.toFixed(2)}%<br>
                   Raw Reduction (Original × Gap): (${r.originalCS.toFixed(2)}% × ${gapFactor.toFixed(2)}%) = ${(r.originalCS * gapFactor / 100).toFixed(2)}%<br>
                   Max Reduction Allowed: ${maxReduction.toFixed(2)}%<br>
                   Final Reduction Applied: ${r.csReduction.toFixed(2)}%<br>
                   Adjusted CS%: ${r.adjustedCS.toFixed(2)}%`
                : 'Original CS%: 0.00%<br>Not available for ClubSaver membership'}
            </div>
          </td>
        </tr>
      `;
    }
  
    // Anchor group
    html += `<tr class="table-light"><td colspan="6"><strong>Anchor Cards</strong></td></tr>`;
    rows.forEach(r => { if (anchorNames.has(r.name)) html += buildCardRow(r, 'Anchor'); });
  
    // Savings group
    html += `<tr class="table-light"><td colspan="6"><strong>Savings Cards</strong></td></tr>`;
    rows.forEach(r => { if (savingsNames.has(r.name)) html += buildCardRow(r, 'Savings'); });
  
    html += `</tbody></table>`;
  
    // Max Individual % Summary with card name tracking
let maxSSAnchor = { name: "", value: 0 };
let maxSSSavings = { name: "", value: 0 };
let maxCSAnchor = { name: "", value: 0 };
let maxCSSavings = { name: "", value: 0 };

rows.forEach(r => {
  if (anchorNames.has(r.name)) {
    if (r.adjustedSS > maxSSAnchor.value) maxSSAnchor = { name: r.name, value: r.adjustedSS };
    if (r.adjustedCS !== null && r.adjustedCS > maxCSAnchor.value) maxCSAnchor = { name: r.name, value: r.adjustedCS };
  }
  if (savingsNames.has(r.name)) {
    if (r.adjustedSS > maxSSSavings.value) maxSSSavings = { name: r.name, value: r.adjustedSS };
    if (r.adjustedCS !== null && r.adjustedCS > maxCSSavings.value) maxCSSavings = { name: r.name, value: r.adjustedCS };
  }
});

const combinedSS = (maxSSAnchor.value + maxSSSavings.value).toFixed(2);
const combinedCS = (maxCSAnchor.value > 0 && maxCSSavings.value > 0)
  ? (maxCSAnchor.value + maxCSSavings.value).toFixed(2)
  : "N/A";

// Render with retailer names
html += `<h5>Max Individual % Summary</h5><table class="table table-bordered">
  <thead><tr><th></th><th>Max Individual %</th><th>Suggested Combo %</th></tr></thead><tbody>
  <tr>
    <td>SS</td>
    <td>
      ${combinedSS}%<br>
      <small>${maxSSAnchor.name} (${maxSSAnchor.value.toFixed(2)}%) + ${maxSSSavings.name} (${maxSSSavings.value.toFixed(2)}%)</small>
    </td>
    <td>${window.manualSuggested.ss.toFixed(2)}%</td>
  </tr>
  <tr>
    <td>CS</td>
    <td>
      ${combinedCS !== "N/A"
        ? `${combinedCS}%<br><small>${maxCSAnchor.name} (${maxCSAnchor.value.toFixed(2)}%) + ${maxCSSavings.name} (${maxCSSavings.value.toFixed(2)}%)</small>`
        : "N/A"}
    </td>
    <td>${window.manualSuggested.cs.toFixed(2)}%</td>
  </tr>
  </tbody></table>`;

document.getElementById("adjustedCardResults").innerHTML = html;


  }
  
