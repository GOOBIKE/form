import provincias from "./provincia.js";
import municipios from "./municipio.js";
import minDate from "./dateCurrent.js";
import "./modalSucess.js";
import distritos from "./distritos.js";

document.addEventListener("DOMContentLoaded", () => {
    function gerarlistaProvincias(provincias) {

        const listaProvincias = document.getElementById('listaProvincias');
        let provincia = "";

        if (provincias && provincias.length) {
            provincias.forEach((obj) => {
                provincia += `<option value=${obj.value}>${obj.name}</option>`;
            });
        }

        listaProvincias.innerHTML = provincia;

        listaProvincias.addEventListener('change', (event) => { 
            const selectedValue = event.target.value;
            const labelMunicipios = document.getElementById('labelMunicipios');
            const listaMunicipios = document.getElementById('listaMunicipios');
            
            let municipio = "";

            if (selectedValue) {
                labelMunicipios.style.display = 'block';
                if (municipios && municipios.length) {
                    const municipiosFiltrados = municipios.filter((obj) => obj.provinciaId === Number(selectedValue));
                    municipiosFiltrados.forEach((obj) => {
                        municipio += `<option value=${obj.id}>${obj.name}</option>`;
                    });
                }
            } else {
                labelMunicipios.style.display = 'none';
            }

            listaMunicipios.innerHTML = municipio;
            // console.log(listaMunicipios);
            listaMunicipios.addEventListener('change', (event) => {
              // console.log(event.target.value);
              const selectedMunicipioValue = event.target.value;
              const labelDistritos = document.getElementById('labelDistritos');
              const listaDistritos = document.getElementById('listaDistritos');
              
              let distrito = "";
              
              console.log(selectedMunicipioValue);
              if (selectedMunicipioValue) {
                labelDistritos.style.display = 'block';
                  if (distritos && distritos.length) {
                      const distritosFiltrados = distritos.filter((obj) => obj.municipioId === Number(selectedMunicipioValue));
                      console.log(selectedMunicipioValue,distritosFiltrados);
                      distritosFiltrados.forEach((obj) => {
                          distrito += `<option value=${obj.municipioId}>${obj.name}</option>`;
                      });
                  }
              } else {
                labelDistritos.style.display = 'none';
              }
  
              listaDistritos.innerHTML = distrito;
              
          });
        });
    }

    gerarlistaProvincias(provincias);

    let inputDate = document.getElementById("dt_nascimento");
    inputDate.setAttribute("max", minDate);
});
