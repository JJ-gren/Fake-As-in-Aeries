function getr(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

grades=document.getElementsByClassName("widget-body classesSection")[0].children


    for (var i = 0; i < grades.length; i++){
grades[i].children[1].innerHTML="<span class=\"TextSubHeading\">Grade</span><div class=\"Grade GradeA\">A<span>("+9+getr(35,100)/10+"%)</span></div>"
    }
