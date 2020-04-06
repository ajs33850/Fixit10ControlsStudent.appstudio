
let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]
let allExercises = exercises.concat(coreExercises)

/* I combined the arrays before I realized situps and plank were in exercises, so I left it since it didn't change much besides having them display twice */

favExercises.onshow=function(){
  selExercises.clear()
  for(i = 0; i <= allExercises.length - 1; i++) {
    selExercises.addItem(allExercises[i])
}
}



btnSubmit.onclick=function(){
if (selExercises.value == "situps,plank") {
  NSB.MsgBox("You chose situps and planks - those are the two core exercises.")
} else {
  NSB.MsgBox("You did not pick the two core exercises")
  }

}


Button2.onclick=function(){
  ChangeForm(mobileNav)
}
