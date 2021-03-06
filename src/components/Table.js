import React from 'react';

class Table extends React.Component{

    constructor(props){
        super(props);
        this.state={
            students:[
                {id:1,name:"Hitesh",rn:12,marks:48},
                {id:2,name:"Raghav",rn:13,marks:48},
                {id:3,name:"Vidyut",rn:14,marks:48},
                {id:4,name:"Rakesh",rn:15,marks:48},
            ]
        }
    }

    renderHeaderData=()=>{
        const header = Object.keys(this.state.students[0]);
        console.log("renderheader",header);
        return(

            header.map((key,index)=>{
                return (
                    <th key={index}>
                        {key.toUpperCase()}
                    </th>
                )
            })
        )
        
    }

    renderTableData = ()=>{
        console.log("mn", this.state.students);
        return(
        this.state.students.map((student,index)=>{
            const {id,name,rn,marks} = student;
            // console.log(id)
            return(<tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{rn}</td>
                    <td>{marks}</td>
                </tr> 
                
            )
        }))
    }

    render(){
        return(
            <table id='students'>
            <thead>
            <tr>{this.renderHeaderData()}</tr>
        </thead>
        <tbody>
       {this.renderTableData()}
        </tbody>
                  
            </table>
        )
    }
}

export default Table;

