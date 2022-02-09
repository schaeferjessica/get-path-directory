
const Path = (props) => { 

  //where props is the object with the elements we defined on index (setPathObj and pathObj)

  return (
    <div>
      <span className="block">{props.pathObj.path}</span>
      <br />
      <small className="block">start: {props.pathObj.from} </small>
      <small className="block">end: {props.pathObj.to}</small>
    </div>
  );
};

// populating with the objects of the pathObj that is going to be defined in the tree

export default Path;
