import _ from 'lodash';
import './styles.css';
import Icon from './icon.jpg'
import myName from './myName';
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', myName("Kashish"), 'Good working with you'], ' ');
    const myIcon = new Image(100,200);
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());

