function MissedGoal() {
    return <h4>MISSED!</h4>;
  }
  
  function MadeGoal() {
    return <h4>Goal!</h4>;
  }

  
  function Goal(props) {

    const isGoal = props.isGoal;
    /*
    if (isGoal) {
      return <MadeGoal/>;
    }
    return <MissedGoal/>;
    */

    //conditional rendering using using ternary operator
    return(
        <>
        {props.isGoal ?<MadeGoal/>:<MissedGoal/>}
        </>
    );
  }

  export default Goal;