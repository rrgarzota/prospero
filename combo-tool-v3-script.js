const cards= [
  {
    Name: 'Buca di Beppo',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 16.10, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: ['Dining'],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Live on Production' 
  },
  {
    Name: 'Fanatics',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 16.10, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: ['Fashion', 'Sports'], 
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Live on Production'   
  },
  {
    Name: 'Red Robin',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 10.90, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: ['Dining'], 
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Live on Production'   
  },
  {
   Name: 'Abercrombie & Fitch',  
   SS: 10.40, 
   CS: 6.90, 
   tillo: 10.40, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
   {
   Name: 'Ace Hardware',  
   SS: 6.70, 
   CS: 3.20, 
   tillo: 6.70, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Home'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name: 'Adidas',  
   SS: 11.50,
   CS: 8.00, 
   tillo: 11.50, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Sports', 'Fashion', 'Shoes'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
   {
   Name: 'Advance Auto Parts',  
   SS: 13.50,
   CS: 10.00, 
   tillo: 13.75, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Auto',], 
   Tier: 'SuperSaver,ClubSaver' 
  },
   {
   Name: 'Aerie',  
   SS: 9.50,
   CS: 6.00, 
   tillo: 9.50, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion', "Men's Fashion", "Women's  Fashion"], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name: 'Aeropostale',  
   SS: 10.90,
   CS: 7.40, 
   tillo: 10.90, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion',], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name: 'Airbnb',  
   SS: 6.00,
   CS: 2.50, 
   tillo: 6.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Travel',], 
   Tier: 'SuperSaver,ClubSaver' 
  },
   {
   Name: 'AMC',  
   SS: 9.00,
   CS: 5.50, 
   tillo: 9.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment',], 
   Tier: 'SuperSaver,ClubSaver' 
  },
   {
   Name: 'American Eagle',  
   SS: 9.00,
   CS: 6.20, 
   tillo: 9.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion',], 
   Tier: 'SuperSaver,ClubSaver' 
  },
   {
   Name: 'Applebees',  
   SS: 9.00,
   CS: 5.50, 
   tillo: 9.10, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining',], 
   Tier: 'SuperSaver,ClubSaver' 
  },
   {
   Name: 'ASOS',  
   SS: 8.00,
   CS: 4.50, 
   tillo: 8.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion',], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name: 'Athleta',  
   SS: 11.50,
   CS: 8.00, 
   tillo: 11.75, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Sports', 'Fashion', "Men's Fashion", "Women's  Fashion"], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name: 'AutoZone',  
   SS: 6.90,
   CS: 3.40, 
   tillo: 6.95, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Auto'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name: 'Banana Republic',  
   SS: 11.50,
   CS: 8.00, 
   tillo: 11.75, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name: 'Baskin-Robbins',  
   SS: 6.70,
   CS: 3.20, 
   tillo: 6.70, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name: 'Bass Pro Shops',  
   SS: 7.50,
   CS: 4.00, 
   tillo: 7.50, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Sports'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name: 'Bath & Body Works',  
   SS: 7.90,
   CS: 4.40, 
   tillo: 7.90, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion', 'Beauty'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'BJs Restaurants',  
   SS: 13.20,
   CS: 9.70, 
   tillo: 13.28, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Buffalo Wild Wings',  
   SS: 9.50,
   CS: 6.00, 
   tillo: 9.50, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Burger King',  
   SS: 8.00,
   CS: 4.50, 
   tillo: 8.05, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Carnival Cruise Line',  
   SS: 12.00,
   CS:8.50, 
   tillo:12.30, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Travel'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Champs Sports',  
   SS:7.50 ,
   CS:4.00, 
   tillo:7.50, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Sports'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:"Chili's",  
   SS:10.00 ,
   CS:6.50, 
   tillo:10.15, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Columbia Sportswear',  
   SS:13.50 ,
   CS:10.00, 
   tillo:13.75, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Sports'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Crate & Barrel',  
   SS:9.00,
   CS:5.50, 
   tillo:9.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Home'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'CVS',  
   SS:9.00 ,
   CS:5.50, 
   tillo:9.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: true,  
   adjustable: false, 
   Category: ['Grocery', 'Pharmacy','Pets', 'Super 7'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:"Domino's",  
   SS:7.50 ,
   CS:4.00, 
   tillo:7.50, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Eddie Bauer',  
   SS:9.90,
   CS:6.40, 
   tillo:9.95, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Sports' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Fandango (At Home-VUDU)',  
   SS:9.90,
   CS:6.40, 
   tillo:9.90, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Fandango (Ticket)',  
   SS:9.00,
   CS:5.50, 
   tillo:9.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Five Guys',  
   SS:9.90,
   CS:6.40, 
   tillo:9.95, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Foot Locker',  
   SS:7.50,
   CS:4.00, 
   tillo:7.50, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Sports','Fashion', 'Shoes'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'GameStop',  
   SS:9.00,
   CS:5.50, 
   tillo:9.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment', 'Gaming' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Gap',  
   SS:11.50,
   CS:8.00, 
   tillo:11.75, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Google Play',  
   SS:5.00,
   CS:1.50, 
   tillo:5.10, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Grubhub',  
   SS:7.00,
   CS:3.50, 
   tillo:7.10, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Hotels.com',  
   SS:9.70,
   CS:6.20, 
   tillo:9.75, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Travel' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Hulu',  
   SS:10.90,
   CS:7.40, 
   tillo:10.90, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'IHOP',  
   SS:9.00,
   CS:5.50, 
   tillo:9.10, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'JCPenney',  
   SS:12.50,
   CS:9.00, 
   tillo:12.80, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion','Home' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:"Jersey Mike's",  
   SS:10.90,
   CS:7.40, 
   tillo:10.90, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Jiffy Lube',  
   SS:12.00,
   CS:8.50, 
   tillo:12.80, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Auto' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:"Kohl's",  
   SS:9.30,
   CS:5.80, 
   tillo:9.30, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion','Home' ], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'L.L.Bean',  
   SS:14.00,
   CS:10.50, 
   tillo:14.60, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Sports'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:"Land's End",  
   SS:15.00,
   CS:11.50, 
   tillo:15.45, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Sports'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:"Macy's",  
   SS:11.50,
   CS:8.00, 
   tillo:11.50, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion','Home'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Marshalls',  
   SS:9.00,
   CS:5.50, 
   tillo:9.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion','Home'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Nike',  
   SS:12.00,
   CS:8.50, 
   tillo:12.45, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Sports','Fashion', 'Shoes'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Nintendo',  
   SS:12.00,
   CS:8.50, 
   tillo:12.30, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment', 'Gaming'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Nordstrom',  
   SS:5.00,
   CS:1.50, 
   tillo:5.10, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Nordstrom Rack',  
   SS:5.00,
   CS:1.50, 
   tillo:5.10, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Old Navy',  
   SS:11.50,
   CS:8.00, 
   tillo:11.75, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Olive Garden',  
   SS:9.00,
   CS:5.50, 
   tillo:9.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Outback Steakhouse',  
   SS:6.70,
   CS:3.20, 
   tillo:6.70, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Panda Express',  
   SS:11.00,
   CS:7.50, 
   tillo:11.35, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Panera Bread',  
   SS:7.50,
   CS:4.00, 
   tillo:7.50, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining', 'Coffee'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:"Papa John's",  
   SS:9.90,
   CS:6.40, 
   tillo:9.95, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:"Peet's Coffee",  
   SS:11.60,
   CS:8.10, 
   tillo:11.60, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining', 'Coffee'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Pep Boys',  
   SS:11.00,
   CS:7.50, 
   tillo:11.35, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Auto'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Petco',  
   SS:14.50,
   CS:11.00, 
   tillo:14.70, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Home','Pets'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'PetSmart',  
   SS:7.10,
   CS:3.60, 
   tillo:7.10, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Home','Pets'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Pottery Barn',  
   SS:9.00,
   CS:5.50, 
   tillo:9.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Home'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Princess Cruises',  
   SS:9.50,
   CS:6.00, 
   tillo:9.50, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Travel'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Regal Cinemas',  
   SS:9.50,
   CS:6.00, 
   tillo:9.50, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Roblox',  
   SS:9.00,
   CS:5.50, 
   tillo:9.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment', 'Gaming'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Sephora',  
   SS:9.40,
   CS:5.90, 
   tillo:9.45, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion', 'Beauty'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Sony PlayStation',  
   SS:7.00,
   CS:3.50, 
   tillo:7.10, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment', 'Gaming'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Southwest Airlines',  
   SS:8.00,
   CS:4.50, 
   tillo:8.05, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Travel'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Spotify',  
   SS:7.50,
   CS:4.00, 
   tillo:7.50, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Subway',  
   SS:6.00,
   CS:2.50, 
   tillo:6.15, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'T.J.Maxx',  
   SS:9.00,
   CS:5.50, 
   tillo:9.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion','Home'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Taco Bell',  
   SS:6.00,
   CS:2.50, 
   tillo:6.15, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Texas Roadhouse ',  
   SS:10.50,
   CS:7.00, 
   tillo:10.90, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Ultra Beauty',  
   SS:9.90,
   CS:6.40, 
   tillo:9.95, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Fashion'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Under Armour',  
   SS:13.00,
   CS:9.50, 
   tillo:13.28, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Sports'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'West Elm',  
   SS:7.50,
   CS:4.00, 
   tillo:7.50, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Home'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Williams-Sonoma',  
   SS:9.00,
   CS:5.50, 
   tillo:9.00, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Home'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'Xbox',  
   SS:9.50,
   CS:6.00, 
   tillo:9.90, 
   comboOnly: false, 
   availableCS: true, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment', 'Gaming'], 
   Tier: 'SuperSaver,ClubSaver' 
  },
  {
   Name:'76 Fuel',  
   SS:2.20,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: false, 
   Category: ['Gasoline'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Albertsons',  
   SS:3.50,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: false, 
   Category: ['Grocery','Pharmacy','Pets'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Amazon',  
   SS:2.20,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: true,  
   adjustable: false, 
   Category: ['Entertainment','Fashion','home','Sports','Auto','Pharmacy','Grocery','Pets', 'Super 7'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Apple',  
   SS:3.30,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: false, 
   Category: ['Entertainment'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Best Buy',  
   SS:5.20,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment','Home'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Chevron',  
   SS:2.90,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: false, 
   Category: ['Gasoline'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Chipotle',  
   SS:4.20,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:"Dick's Sporting Goods",  
   SS:3.50,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: true, 
   Category: ['Sports'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Disney',  
   SS:5.00,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: true, 
   Category: ['Entertainment'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Dunkin',  
   SS:3.40,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining', 'Coffee'], 
   Tier: 'SuperSaver,' 
  },    
  {
   Name:'Instacart',  
   SS:5.50,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: false, 
   Category: ['Grocery','Pharmacy','Pets'], 
   Tier: 'SuperSaver,' 
  },    
  {
   Name:'Kroger',  
   SS:3.30,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: false, 
   Category: ['Grocery','Gasoline','Pharmacy','Pets'], 
   Tier: 'SuperSaver,' 
  },    
  {
   Name:"Lowe's", 
   SS:6.10,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: true,  
   adjustable: false, 
   Category: ['Home','Auto','Pets', 'Super 7'], 
   Tier: 'SuperSaver,' 
  },    
  {
   Name:'Pilot Fying J',  
   SS:5.00,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: true, 
   Category: ['Travel','Gasoline'], 
   Tier: 'SuperSaver,' 
  }, 
  {
   Name:'Safeway',  
   SS:3.50,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: false, 
   Category: ['Grocery','Gasoline','Pharmacy','Pets'], 
   Tier: 'SuperSaver,' 
  },  
  {
   Name:"Sam's Club",  
   SS:2.10,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: false, 
   Category: ['Grocery','Gasoline','Pharmacy','Home','Pets'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Starbucks',  
   SS:5.00,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: true, 
   Category: ['Dining', 'Coffee'], 
   Tier: 'SuperSaver,' 
  }, 
  {
   Name:'Target',  
   SS:5.20,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: true,  
   adjustable: false, 
   Category:  ['Grocery','Entertainment','Fashion','Home','Sports','Pharmacy','Pets', 'Super 7'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Texaco',  
   SS:2.90,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: false, 
   Category: ['Gasoline'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'The Home Depot',  
   SS:5.20,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: true,  
   adjustable: false, 
   Category: ['Gasoline','Auto','Pets', 'Super 7'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Uber',  
   SS:4.00,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: true, 
   Category: ['Travel'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Vons',  
   SS:3.50,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: false,  
   adjustable: false, 
   Category: ['Grocery','Pharmacy','Pets'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Walgreens',  
   SS:5.90,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: true,  
   adjustable: false, 
   Category: ['Grocery','Pharmacy','Pets', 'Super 7'], 
   Tier: 'SuperSaver,' 
  },
  {
   Name:'Walmart',  
   SS:2.10,
   CS:0.0, 
   tillo:null, 
   comboOnly: false, 
   availableCS: false, 
   Super7: true,  
   adjustable: false, 
   Category: ['Grocery','Entertainment','Fashion','Gasoline','Home','Auto','Sports','Pharmacy','Pets', 'Super 7'], 
   Tier: 'SuperSaver,' 
  },
   { 
    Name: '1-800 Flowers',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 13.75, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: [''],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Available - Not Live' 
  },
  { 
    Name: 'Best Western',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 8.50, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: [''],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Potential New Retailers' 
  },
  { 
    Name: 'Chewy',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 5.75, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: ['Home','Pets'],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Live For Testing' 
  },
  { 
    Name: 'Dave & Busters',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 11.25, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: [''],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Live on Production' 
  },
  { 
    Name: 'Delta Airlines',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 6.00, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: [''],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Live on Production' 
  },
  { 
    Name: 'Door Dash',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 7.00, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: ['Dining'],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'To be added by Dev' 
  },
  { 
    Name: 'Home Goods',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 9.00, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: ['Home'],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Live For Testing' 
  },
 { 
    Name: 'IKEA',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 6.00, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: [''],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Potential New Retailers' 
  },
   { 
    Name: 'Jamba',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 10.90, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: [''],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Waiting on Design ' 
  },
   { 
    Name: 'KFC',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 7.10, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: [''],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Design Complete-Retailer on Hold ' 
  },
   { 
    Name: 'Michaels',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 11.85, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: [''],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Design Complete-Retailer on Hold ' 
  },
   { 
    Name: 'Omaha Steaks',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 16.00, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: ['Dining'],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Live For Testing ' 
  },
  { 
    Name: 'Paramount+',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 8.45, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: [''],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'To Be Added by Dev ' 
  },
  { 
    Name: 'Spa & Wellness',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 22.25, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: [''],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'Available- Not Live ' 
  },
   { 
    Name: 'Stubhub',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 6.50, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: [''],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'To Be Added by Dev ' 
  },
  { 
    Name: "Victoria's Secret",  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 7.10, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: ["Men's Fashion", "Women's  Fashion"],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'DEsigns Complete-Retailer On Hold' 
  },
  { 
    Name: 'Wayfair',  
      SS: 0.0, 
      CS: 0.0, 
      Tillo: 8.00, 
      comboOnly: true, 
      availableCS: false,  
      Super7: false, 
      adjustable: true, 
      Category: [''],
      Tier: 'SuperSaver,ClubSaver', 
      Status: 'DEsigns Complete-Retailer On Hold' 
  },
  {
    Name: 'Ulta Beauty',  
    SS: 9.90, 
    CS: 6.40, 
    tillo: 9.95, 
    comboOnly: false, 
    availableCS: true, 
    Super7: false,  
    adjustable: true, 
    Category: ['Fashion', 'Beauty'], 
    Tier: 'SuperSaver,ClubSaver',
    Status: 'Live on Production'
  }
  
 
];


const categories = ['Auto', 'Beauty', 'Coffee', 'Dining', 'Entertainment', 'Fashion', "Men's Fashion", "Women's  Fashion", 'Gaming', 'Gasoline', 'Grocery', 'Home', 'Pets', 'Pharmacy', 'Shoes', 'Sports', 'Super 7', 'Travel'];
const categoryDropdown = document.getElementById("categoryDropdown");
categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoryDropdown.appendChild(opt);
});
const categoryChoices = new Choices('#categoryDropdown', { removeItemButton: true });

function roundToHalf(val) {
  return (Math.round(val * 2) / 2).toFixed(2);
}

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

          // 🚨 Anchor restrictions
          if (a.Super7 && !a.comboOnly) continue;      // Allow Super7 only if comboOnly
          if (!a.adjustable && !a.comboOnly) continue; // Non-adjustable only allowed if comboOnly

          // ✅ Handle SS values
          const anchorSS = a.comboOnly ? a.Tillo : a.SS;
          const savingsSS = s.comboOnly ? s.Tillo : s.SS;
          const ssCombo = anchorSS + savingsSS;

          // ✅ Handle CS values
          let csCombo = 0;
          let csBreakdown = "";

          if (s.comboOnly) {
              csCombo = (a.comboOnly ? a.Tillo : (a.CS || 0)) + s.Tillo;
              csBreakdown = `<span class='cs-color'>(<span class='cs-color'>${a.comboOnly ? a.Tillo : (a.CS || 0)}%</span> + <span class='cs-color'>${s.Tillo}%</span>) = <strong>${csCombo.toFixed(2)}%</strong></span>`;
          } else if (s.availableCS && !useSSFallback) {
              csCombo = (a.comboOnly ? a.Tillo : (a.CS || 0)) + s.CS;
              csBreakdown = `<span class='cs-color'>(<span class='cs-color'>${a.comboOnly ? a.Tillo : (a.CS || 0)}%</span> + <span class='cs-color'>${s.CS}%</span>) = <strong>${csCombo.toFixed(2)}%</strong></span>`;
          } else {
              csCombo = (a.comboOnly ? a.Tillo : (a.CS || 0)) + (s.comboOnly ? s.Tillo : s.SS);
              csBreakdown = `<span class='cs-color'>(<span class='cs-color'>${a.comboOnly ? a.Tillo : (a.CS || 0)}%</span> + <span class='ss-color'>${s.comboOnly ? s.Tillo : s.SS}%</span>) = <strong>${csCombo.toFixed(2)}%</strong></span>`;
          }

          // ✅ Ratings
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
                  csRating,
                  membershipTier: a.comboOnly ? "Combo Only" : a.Tier
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
      let table = `<table id="resultsTable" class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Anchor</th>
          <th>Savings</th>
          <th>SS Combo</th>
          <th>CS Combo</th>
          <th>SS Rating</th>
          <th>CS Rating</th>
          <th>Membership Tier</th>
        </tr>
      </thead>
      <tbody>`;

      Object.keys(groupedCombos).forEach(anchor => {
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
                <td data-order="${parseFloat(combo.ssCombo)}">${combo.ssBreakdown}</td>
                <td data-order="${parseFloat(combo.csCombo)}">${combo.csBreakdown}</td>
                <td>${ssBadge}</td>
                <td>${csBadge}</td>
                <td>${combo.membershipTier}</td>
              </tr>`;
          });
      });

      table += '</tbody></table>';
      container.innerHTML += table;

      // ✅ DataTables initialization
      if ($.fn.DataTable.isDataTable('#resultsTable')) {
          $('#resultsTable').DataTable().destroy();
      }
      $('#resultsTable').DataTable({
          pageLength: 10,
          lengthMenu: [5, 10, 25, 50, 100],
          order: [],
          autoWidth: false
      });
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
  const qualifiedAnchors = new Set();

  combos.forEach(combo => {
      if (['Good', 'Excellent'].includes(combo.ssRating) && ['Good', 'Excellent'].includes(combo.csRating)) {
          const anchorCard = cards.find(c => c.Name === combo.anchor);
          
          // 🚨 New rule: anchors allowed if adjustable OR comboOnly
          if (anchorCard && (anchorCard.adjustable || anchorCard.comboOnly)) {
              qualifiedAnchors.add(combo.anchor);
              if (!anchorMap[combo.anchor]) anchorMap[combo.anchor] = new Set();
              anchorMap[combo.anchor].add(combo.savings);
          }
      }
  });

  // ✅ All possible retailers (anchors & savings), including comboOnly
  const allQualified = Array.from(new Set(combos.flatMap(c => [c.anchor, c.savings]))).sort();

  // ✅ Anchor dropdown (adjustable OR comboOnly only)
  const anchorOptions = Array.from(qualifiedAnchors).sort().map(r => ({ value: r, label: r }));
  anchorSelect.clearChoices();
  anchorSelect.setChoices(anchorOptions, 'value', 'label', true);

  // ✅ Savings dropdown (all cards can be savings, including comboOnly)
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

  // ✅ Round Suggested to nearest 0.5
  const suggestedSS = roundToHalf(minSS);
  const suggestedCS = roundToHalf(minCS);

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

  // Manual Combo Summary (Suggested = Rounded)
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
      roundedAdjustedSS: null,
      roundedAdjustedCS: null,
      ssReduction: 0,
      csReduction: null,
      status: locked ? "Locked" : "Adjusted"
    };

    if (!locked) {
      const rawSSReduction = card.SS * (gapFactor / 100);
      const appliedSSReduction = Math.min(rawSSReduction, maxReduction);
      result.adjustedSS = Math.max(card.minSS || 2, card.SS - appliedSSReduction);
      result.roundedAdjustedSS = roundToHalf(result.adjustedSS);
      result.ssReduction = appliedSSReduction;

      if (card.availableCS) {
        const rawCSReduction = card.CS * (gapFactor / 100);
        const appliedCSReduction = Math.min(rawCSReduction, maxReduction);
        result.adjustedCS = Math.max(card.minCS || 2, card.CS - appliedCSReduction);
        result.roundedAdjustedCS = roundToHalf(result.adjustedCS);
        result.csReduction = appliedCSReduction;
      }
    }

    rows.push(result);
  });

  const anchorNames = new Set(selectedCombos.map(c => c.anchor));
  const savingsNames = new Set(selectedCombos.map(c => c.savings));

  let html = `<h5>Adjusted Individual Values</h5><table class="table table-bordered">
    <thead><tr>
      <th>Card</th>
      <th>Original SS%</th><th>Adjusted SS%</th><th>Rounded Adjusted SS%</th>
      <th>Original CS%</th><th>Adjusted CS%</th><th>Rounded Adjusted CS%</th>
      <th>Status & Details</th>
    </tr></thead><tbody>`;

  let rowIndex = 0;

  function buildCardRow(r, group) {
    const detailId = `details-${rowIndex++}`;
    return `
      <tr>
        <td>${r.name}</td>
        <td>${r.originalSS.toFixed(2)}%</td>
        <td>${r.adjustedSS.toFixed(2)}%<br><small>(${r.originalSS.toFixed(2)}% - ${r.ssReduction.toFixed(2)}%)</small></td>
        <td>${r.roundedAdjustedSS !== null ? `${r.roundedAdjustedSS}%` : '<span class="text-muted">N/A</span>'}</td>
        <td>${r.originalCS !== null ? r.originalCS.toFixed(2) + "%" : "0.00%"}</td>
        <td>${r.adjustedCS !== null
          ? `${r.adjustedCS.toFixed(2)}%<br><small>(${r.originalCS.toFixed(2)}% - ${r.csReduction.toFixed(2)}%)</small>`
          : '<span class="text-muted">N/A</span>'}</td>
        <td>${r.roundedAdjustedCS !== null ? `${r.roundedAdjustedCS}%` : '<span class="text-muted">N/A</span>'}</td>
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
        <td colspan="8">
          <div class="bg-light p-2 rounded">
            <strong>SS%</strong><br>
            Original SS%: ${r.originalSS.toFixed(2)}%<br>
            Raw Reduction (Original × Gap): (${r.originalSS.toFixed(2)}% × ${gapFactor.toFixed(2)}%) = ${(r.originalSS * gapFactor / 100).toFixed(2)}%<br>
            Max Reduction Allowed: ${maxReduction.toFixed(2)}%<br>
            Final Reduction Applied: ${r.ssReduction.toFixed(2)}%<br>
            Adjusted SS%: ${r.adjustedSS.toFixed(2)}%<br>
            Rounded Adjusted SS%: ${r.roundedAdjustedSS !== null ? r.roundedAdjustedSS + "%" : "N/A"}<br><br>

            <strong>CS%</strong><br>
            ${r.adjustedCS !== null
              ? `Original CS%: ${r.originalCS.toFixed(2)}%<br>
                 Raw Reduction (Original × Gap): (${r.originalCS.toFixed(2)}% × ${gapFactor.toFixed(2)}%) = ${(r.originalCS * gapFactor / 100).toFixed(2)}%<br>
                 Max Reduction Allowed: ${maxReduction.toFixed(2)}%<br>
                 Final Reduction Applied: ${r.csReduction.toFixed(2)}%<br>
                 Adjusted CS%: ${r.adjustedCS.toFixed(2)}%<br>
                 Rounded Adjusted CS%: ${r.roundedAdjustedCS !== null ? r.roundedAdjustedCS + "%" : "N/A"}`
              : 'Original CS%: 0.00%<br>Not available for ClubSaver membership'}
          </div>
        </td>
      </tr>
    `;
  }

  // Anchor group
  html += `<tr class="table-light"><td colspan="8"><strong>Anchor Cards</strong></td></tr>`;
  rows.forEach(r => { if (anchorNames.has(r.name)) html += buildCardRow(r, 'Anchor'); });

  // Savings group
  html += `<tr class="table-light"><td colspan="8"><strong>Savings Cards</strong></td></tr>`;
  rows.forEach(r => { if (savingsNames.has(r.name)) html += buildCardRow(r, 'Savings'); });

  html += `</tbody></table>`;

  document.getElementById("adjustedCardResults").innerHTML = html;
}
