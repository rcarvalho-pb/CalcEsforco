let cabosBT = ['', 'CA4', 'CA2', 'CA1/0', 'CA4/0', 'M35', 'M70', 'M120'];
let cabosMT = ['', 'CA4', 'CA2', 'CA1/0', 'CA4/0', 'CA336', 'CAA4', 'CAA2', 'CAA1/0', 'CAA4/0', 'CAA336', 'P50', 'P70', 'P120', 'P185'];
let fases = ['', 1,2,3];
let neutro = ['', 'SIM', 'NÂO'];

const esforçosMT = {
    'CA4': 90,
    'CA2': 90,
    'CA1/0': 140,
    'CA4/0': 280,
    'CA336': 450,
    'CAA4': 110,
    'CAA2': 160,
    'CAA1/0': 210,
    'CAA4/0': 410,
    'CAA336': 610,
    'P50': 419,
    'P70': 638,
    'P120': 674,
    'P185': 618
}


genSelect(neutro, 'neutro');
genSelect(cabosMT, 'vao');
genSelect(fases, 'fases');
genSelect(cabosBT, 'vaoBT')

function genSelect(campo, classe){
  
  let select = document.getElementsByClassName(classe)

  for(let i = 0; i < select.length; i++){
    for(let j = 0; j < campo.length; j++){
        let opt = document.createElement('option')
        opt.value = campo[j]
        opt.innerHTML = campo[j]
        select[i].appendChild(opt)
    }
  }
    
}
  
class Condutor {
  condutor;
  fases;
  neutro;
  angulo;
  esforco;
  constructor(condutor, fases, neutro, angulo){
    {
      this.condutor = condutor
      this.fases = fases
      this.neutro = neutro
      this.angulo = angulo
      this.esforco = esforçosMT[condutor]
    }
  }
}

let condutores = [];

const btn = document.querySelector('#getData')

btn.addEventListener('click', function(e){
  e.preventDefault()
  let condutoresMT = document.querySelectorAll('.vao')
  let condutoresBT = document.querySelectorAll('.vaoBT')
  let neutros = document.querySelectorAll('.neutro')
  let angulos = document.querySelectorAll('.angulo')
  let fases = document.querySelectorAll('.fases')

  console.log(condutoresMT.values)
  console.log(condutoresBT.values)

  for(let i = 0; i < condutoresMT.length; i++){
    condutores.push(new Condutor(condutoresMT[i].value, fases[i].value, neutros[i].value, angulos[i].value))
  }

  for(let i = condutoresMT.length; i < condutoresMT.lenght + condutoresBT.lenght; i++){
    condutores.push(new Condutor(condutoresBT[i].value, fases[i].value, neutros[i].value, angulos[i].value))
  }
})