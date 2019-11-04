export default function(){
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );
  this.transition(
    this.fromRoute('monsters.index'),
    this.use('toRight'),
    this.reverse('toLeft')
  )

  this.transition(
    this.fromRoute('monsters.monster.show'),
    this.toRoute('monsters.monster.edit'),
    this.use('toUp'),
    this.reverse('toDown')
  ),

  this.transition(
    this.hasClass('high-level'),
    this.toValue(true),
    this.use('fade', {duration:500}),
    this.reverse('toDown', {duration:500})
  ),

  this.transition(
    this.hasClass('liquid-monster'),
    this.use('toRight',{duration:1000})
  )
}
