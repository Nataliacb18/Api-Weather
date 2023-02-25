import nublado from "../assets/icons/nublado.png";
import dom from "../assets/icons/dom.png"
import nube from "../assets/icons/nube.png"
import nubes from "../assets/icons/nubes.png"
import lluvia from "../assets/icons/lluvia.png"
import lluvioso from "../assets/icons/lluvioso.png"
import encendiendo from "../assets/icons/encendiendo.png"

export const icons = (icon) => {
    let res = "";
    if (icon === "01d") {
      res = dom;
    } else if (icon === "02d") {
      res = nublado;
    } else if (icon === "03d") {
      res = nube;
    } else if (icon === "04d") {
      res = nubes;
    } else if (icon === "09d") {
      res = lluvia;
    } else if (icon === "10d") {
      res = lluvioso;
    } else if (icon === "11d") {
      res = encendiendo;
    }
    if (icon === "01n") {
      res = dom;
    } else if (icon === "02n") {
      res = nublado;
    } else if (icon === "03n") {
      res = nube;
    } else if (icon === "04n") {
      res = nubes;
    } else if (icon === "09n") {
      res = lluvia;
    } else if (icon === "10n") {
      res = lluvioso;
    } else if (icon === "11n") {
      res = encendiendo;
    }
    return res;
    
}
