// https://www.omnicalculator.com/finance/after-tax-cost-of-debt#how-to-calculate-the-after-tax-cost-of-debt-using-the-after-tax-cost-of-debt-formula

// incomplete

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const aftertaxcostofdebtRadio = document.getElementById('aftertaxcostofdebtRadio');
const netincomeRadio = document.getElementById('netincomeRadio');
const pretaxincomeRadio = document.getElementById('pretaxincomeRadio');
const costofdebtRadio = document.getElementById('costofdebtRadio');

let aftertaxcostofdebt;
let netincome = v1;
let pretaxincome = v2;
let costofdebt = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

aftertaxcostofdebtRadio.addEventListener('click', function() {
  variable1.textContent = 'Net income';
  variable2.textContent = 'Pre-tax income';
  variable3.textContent = 'Cost of debt';
  netincome = v1;
  pretaxincome = v2;
  costofdebt = v3;
  result.textContent = '';
});

netincomeRadio.addEventListener('click', function() {
  variable1.textContent = 'After-tax cost of debt';
  variable2.textContent = 'Pre-tax income';
  variable3.textContent = 'Cost of debt';
  aftertaxcostofdebt = v1;
  pretaxincome = v2;
  costofdebt = v3;
  result.textContent = '';
});

pretaxincomeRadio.addEventListener('click', function() {
  variable1.textContent = 'After-tax cost of debt';
  variable2.textContent = 'Net income';
  variable3.textContent = 'Cost of debt';
  aftertaxcostofdebt = v1;
  netincome = v2;
  costofdebt = v3;
  result.textContent = '';
});

costofdebtRadio.addEventListener('click', function() {
  variable1.textContent = 'After-tax cost of debt';
  variable2.textContent = 'Net income';
  variable3.textContent = 'Pre-tax income';
  aftertaxcostofdebt = v1;
  netincome = v2;
  pretaxincome = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(aftertaxcostofdebtRadio.checked)
    result.textContent = `After-tax cost of debt = ${computeaftertaxcostofdebt().toFixed(2)}`;

  else if(netincomeRadio.checked)
    result.textContent = `Net income = ${computenetincome().toFixed(2)}`;

  else if(pretaxincomeRadio.checked)
    result.textContent = `Pre-tax income = ${computepretaxincome().toFixed(2)}`;

  else if(costofdebtRadio.checked)
    result.textContent = `Cost of debt = ${computecostofdebt().toFixed(2)}`;
})

// calculation

function computeaftertaxcostofdebt() {
  return Number(costofdebt.value) * (1 - (1 - (Number(netincome.value) / Number(pretaxincome.value))));
}

function computenetincome() {
  return (1 - (1 - (Number(aftertaxcostofdebt.value) / Number(BeforeUnloadEvent.value)))) * Number(pretaxincome.value);
}

function computepretaxincome() {
  return Number(netincome.value) / (1 - (1 - (Number(aftertaxcostofdebt.value) / Number(BeforeUnloadEvent.value))));
}

function computecostofdebt() {
  return Number(aftertaxcostofdebt.value) / (1 - (1 - (Number(netincome.value) / Number(pretaxincome.value))));
}