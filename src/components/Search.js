import React, {Component} from 'react';
 
//import './App.css';

class Search extends  Component  {

  constructor(props) {
    super(props);
    this.students= ['Adele',
    'Billy',
    'Cristina']
    this.state = {value: '',
                 students:  this.students,
                 searchList: this.students 

                          };

    this.myFunction = this.myFunction.bind(this);
     
  }


  myFunction() {
    console.log(this.search.value);
    // Declare variables
     var input, filter, ul, li, a, i, txtValue;
     input = this.search.value;
     filter = input.toUpperCase();
     ul = document.getElementById("myUL");
     li = ul.getElementsByTagName('li');
     console.log(li[0].getElementsByTagName("li"))
     let searchListHelper=[]
  
    //Loop through all list items 
     for (i = 0; i < this.state.students.length; i++) {
      let student=this.state.students[i]
      console.log(student,filter,
      student.toLocaleUpperCase().indexOf(filter))

      if (student.toLocaleUpperCase().indexOf(filter)>-1) searchListHelper.push(student)
      // console.log(a)
      // txtValue = a.textContent || a.innerText;
      // if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //    li[i].style.display = "";
      // } else {
      //    li[i].style.display = "none";
      //   }
    }
    this.setState({searchList:searchListHelper})
  }
  
  
  render() {
     




    return (
      <div className="App">
        <header className="App-header">
           
           
         
        <input type="text" id="myInput"
          ref={input => this.search = input}
          onChange={this.myFunction} placeholder="Search for names.."/>
             
          <ul id="myUL">
             {this.state.searchList.map(student=>
              
               <li id={student}>{student}</li>
               
             )}
              
        </ul>
        </header>
          <p></p>
      </div>
    );
  }
}

export default Search;
