red.fade.ng-enter {
  transition:0.5s linear all;
  opacity:0;

}

/* The finishing CSS styles for the enter animation */
red.fade.ng-enter.ng-enter-active {
  opacity:1;
}
red.fade.ng-leave {
  transition:0.5s linear all;
  opacity:1;
  transform:translateX(30px);
}
red.fade.ng-leave.ng-leave-active {
  opacity:0;
}