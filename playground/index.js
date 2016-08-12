import rubberBandEffect from 'rubber-band-effect';

document.documentElement.style.width = '100%';
document.documentElement.style.height = '100%';

const style = document.createElement('style');
style.innerHTML = `
#element {
  position: relative;
}
`;
document.head.appendChild(style);

document.body.style.background = 'white';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.width = '100%';
document.body.style.height = '100%';
document.body.style.overflow = 'hidden';

document.body.innerHTML = `
<div id="main" style="width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;">
  <div id="element" style="width: 200px; height: 400px; border: 1px solid red; overflow: scroll;">
    <ul style="margin: 0; padding: 0; list-style: none;">
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
      <li style="padding: 4px 12px; border-bottom: 1px solid blue;">item</li>    
    </ul>
  </div>
</div>
`;

rubberBandEffect(document.getElementById('element'));
