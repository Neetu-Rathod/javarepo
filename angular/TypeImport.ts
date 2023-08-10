
import {Student} from"./Assignment";
class School
{
    students:Student[]=[
        new Student(101,'jhon'),
        new Student(102,'Palak'),
    ];
    display():void{
        for(var i in this.students)
        {
            console.log(this.students[i]);
        }
    }
}
let Scl:School= new School();
Scl.display();