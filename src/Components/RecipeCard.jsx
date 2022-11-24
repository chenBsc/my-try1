
export default function Recipe(props)
{
        const p=props;
        const btnAddOrDell=()=> 
        {
          props.sendNewList(p.res,props.number);
        }
       if(props.number===1)
        {      
        return(
                <div style={{display: 'inline block',width:'250px', border:'2px solid black', borderRadius:'8px',textAlign:'center',margin:'6px',display:'inline-block'}}>
                <img width='200rem'   display='flex' flex-direction='row' src={props.res.image}/><br/>
                Recipe : {props.res.name} <br/>
                time : {props.res.time} Minutes <br/>
                <button onClick={btnAddOrDell}>Preper dish</button>
        </div>
        );
        }
      else
        {
        return(
                <div style={props.counter>0 ? {display: 'inline block',width:'250px', border:'2px solid black', borderRadius:'8px',textAlign:'center',margin:'6px',display:'inline-block'}:{display:'none'}}>
                <img width='200rem'  src={props.res.image}/><br/>
                Recipe : {props.res.name} <br/>
                time : {props.res.time}  Minutes <br/>
                <button  onClick={btnAddOrDell}>Eat!</button>
        </div>
        );
        }
}
