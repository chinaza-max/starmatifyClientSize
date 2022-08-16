
import {useState} from "react";
import Card from "../../components/Cards/multiPurposeCards/multiPurposeCards"
import Tabs, {Tab} from 'react-best-tabs';
import {Alert,AlertTitle} from '@mui/material';
import 'react-best-tabs/dist/index.css';
import "./Project.css"



export default function Project() {
  const [activeProject,setActiveProject]=useState('k');
  const [pendingProject,setPendingProject]=useState('l');
  const [completedProject,setCompletedProject]=useState('h');

  const data=[{data1:"big joe house",data2:"2/3/2022",data3:"fumigation",data4:"9000",data5:"2000"},
            {data1:"big joe house",data2:"2/3/2022",data3:"fumigation",data4:"9000",data5:"9000"},
            {data1:"tery builging",data2:"2/3/2022",data3:"fumigation",data4:"9000",data5:"2200"},
            {data1:"big joe house",data2:"1/3/2022",data3:"fumigation",data4:"9000",data5:"200"},
            {data1:"lodo plaza",data2:"2/3/2022",data3:"fumigation",data4:"9000",data5:"200"},
            {data1:"plaza",data2:"5/3/2022",data3:"fumigation",data4:"9000",data5:"300"}]
  
  const data1=[{data1:"2/3/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"1/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"5/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"}]
          

  return (
    <div className='Project'> 
      <Tabs
        activeTab="1"
        className=""
        ulClassName=""
        activityClassName="bg-success"
        onClick={(event, tab) => console.log(event, tab)}
      >
          <Tab title="Active" className="mr-3">
              <div className="mt-3">

                {activeProject?
                    <div className='projectMobile'>
                    <h1 className="cardHead">Active project</h1>
                    <Card dataP={data} typeP="active" />
                  </div> 
                :
                <Alert severity="info" className="empty">
                <AlertTitle>Info</AlertTitle>
                Project — <strong>you have no active project!</strong>
                </Alert>
                }
                  
              </div>
          </Tab>
          <Tab title="Pending" className="mr-3">
                <div className="mt-3">
                {pendingProject?
                   <div className='projectMobile'>
                   <h1 className="cardHead">Pending project</h1>
                   <Card dataP={data1} typeP="Pending" />
                   </div> 
                :
                <Alert severity="info" className="empty">
                <AlertTitle>Info</AlertTitle>
                  Project — <strong>you have no pending project!</strong>
                </Alert>
                }
                   
                </div>
          </Tab>
          <Tab title="Completed" className="mr-3">
              <div className="mt-3">
                {completedProject?
                        <div className='projectMobile'>
                        <h1 className="cardHead">Completed project</h1>
                        <Card dataP={data1} typeP="Pending" />
                      </div> 
                :
                  <Alert severity="info" className="empty">
                  <AlertTitle>Info</AlertTitle>
                    Project — <strong>you have no completed project!</strong>
                  </Alert>
                }    
              </div>
          </Tab>
      </Tabs>
  </div>
  )
}
