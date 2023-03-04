const names =['Mahdis', 'Mahdi']

function Post (){
    const chosenName= Math.random() > 0.5 ? names[0] : names[1];
    
    return (
        <div>
            <p id="name">{chosenName}</p>
            <p>React.js is awesome!</p>
            <div>
                <h2>My first Project</h2>
            </div>
        </div>
    )
}


export default Post;