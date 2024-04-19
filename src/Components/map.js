import React from 'react';
export const TodoLists = () => {
    
    const todos = [
        { id: 1, name: 'sushumna',color:'blue' },
        { id: 2, name: 'sriya',color:'green'},
        { id: 3, name: 'isha',color:'black' }
      ];
      return (
        <div>
          <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Map</p>
          <table  width="110%" height="110%" border={2} style={{textAlign:'center',marginLeft:'50px',fontFamily:'Times New Roman'}}>
            <thead>
              <tr>
                <th style={{color:'white',fontWeight:'bold',width: '200px',backgroundColor:'red'}}>Name</th>
                <th style={{color:'white',fontWeight:'bold',width: '200px',backgroundColor:'red'}}>Color</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <tr style={{backgroundColor:'blue'}} key={todo.id}>
                  <td style={{backgroundColor:'green'}}>{todo.name}</td>
                  <td style={{backgroundColor:'violet'}}>{todo.color}</td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </div>
      );
};
