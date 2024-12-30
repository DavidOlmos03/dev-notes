import '../../styles/listGroup.css'

function ListGroup({list}) {
  if(list !== null && list !== undefined){
    const items = Object.values(list);
    // console.log(items);
    return (
      <div className="col-md-6 pb-5">
      <div className="row g-3 justify-content-center">
        <div className="col-12 col-lg-6 col-xxl-6">
          <ol className="list-group">
            {items.map((item,index)=>(
              <li key={index} className="list-group-item">
                {item}
              </li>
          ))}
          </ol>
        </div>
      </div>
      </div>
    );
  }
}

// function ListGroupRight() {
//   return (
//     <div className="row mt-5">
//     <div className="col-8">
//       <div className="tab-content" id="nav-tabContent">
//         <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ut quo aspernatur accusamus voluptatibus suscipit obcaecati totam ea in architecto, amet, facilis adipisci, numquam itaque? Porro, sequi deleniti! A, soluta.
//         </div>
//         <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, in. Minus molestiae expedita nostrum? Eligendi maxime alias consectetur aliquam molestias laudantium quae, debitis harum, quia, eum placeat deleniti in distinctio.
//         </div>
//         <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestiae perferendis, impedit earum quas, eum aspernatur cupiditate voluptatem accusamus nulla itaque? Consectetur ea facilis voluptatibus est quibusdam sint aperiam quod?
//         </div>
//         <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non odio praesentium quod illum? Incidunt dolorum impedit, sint aspernatur soluta error amet architecto, quos esse commodi harum rem dolores atque quas.
//         </div>
//       </div>
//     </div>
//     <div className="col-4">
//       <div className="list-group" id="list-tab" role="tablist">
//         <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
//         <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
//         <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
//         <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
//       </div>
//     </div>
//   </div>
//     );
// }

export {ListGroup};