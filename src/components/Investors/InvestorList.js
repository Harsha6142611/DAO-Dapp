import {useState,useEffect} from "react"
function InvestorList({state}){
   const [list,setlist] = useState([])
   useEffect(()=>{
      const {contract} = state ; 
      async function investorList(){
         const list = await contract.methods.InvestorList().call();
         setlist(list)
      }
      contract && investorList();
   },[state])
   return<>
    <div className="list">
    <h3>Investor's List</h3>
   {list.map((investlist)=>{
      return <p key={investlist}>{investlist}</p>
   })}
    </div>
   </>
  }
  export default InvestorList;