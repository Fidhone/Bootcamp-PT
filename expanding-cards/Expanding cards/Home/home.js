import './home.css'

export const createHome = () => {
    document.querySelector('#container').innerHTML = `
    <div class="panel active" style="background-image: url('https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFydmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')">
    <h3>Spiderman</h3>
  </div>
  <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')">
    <h3>Mini-groot</h3>
  </div>
  <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFydmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')">
    <h3>Deadpool</h3>
  </div>
  <div class="panel" style="background-image: url('https://images8.alphacoders.com/110/1102778.jpg')">
    <h3>Captain America</h3>
  </div>
  <div class="panel" style="background-image: url('https://www.pixel4k.com/wp-content/uploads/2018/11/spectacular-iron-man-4k_1541968331.jpg')">
    <h3>Ironman</h3>
  </div>
  <div class="panel" style="background-image: url('https://i.pinimg.com/736x/9b/f7/9e/9bf79eb15e3ad18e86b3cdc220de7b85.jpg')">
  <h3>Thanos</h3>
  </div>
`
addListenersHome()
}

const addListenersHome = () => {
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });
    
    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }
}