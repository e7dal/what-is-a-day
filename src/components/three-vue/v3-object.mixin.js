import {
  Color
  , Vector3
  , Euler
} from 'three'
import _uniq from 'lodash/uniq'

export default {
  props: {
    name: String
  }
  , inject: [ 'threeVue' ]
  , created(){
    this.disposables = []
  }
  , mounted(){
    if ( !this.v3object ){
      throw new Error('Please set component v3object property')
    }

    const parent = this.$parent.v3object

    if ( !parent ){ return }

    parent.add( this.v3object )
    this.$on('hook:beforeDestroy', () => {
      parent.remove( this.v3object )
    })

    this.threeVue.$emit('scene:changed', { type: 'add', component: this, object: this.v3object })
  }
  , beforeDestroy(){
    this.threeVue.$emit('scene:changed', { type: 'remove', component: this, object: this.v3object })

    this.registerDisposables([ this.v3object.geometry, this.v3object.material ])
    this.disposables.forEach( thing => thing && thing.dispose && thing.dispose() )
  }
  , render(h){
    if ( !this.v3object ){
      this.createObject()
    }
    this.updateObjects()
    this.v3object.name = this.name
    return h(
      'div'
      , this.$slots.default
    )
  }
  , methods: {

    updateObjects(){
      // abstract
    }

    , registerDisposables( thing ){
      if ( Array.isArray( thing ) ){
        Array.prototype.push.apply( this.disposables, thing )
      } else {
        this.disposables.push( thing )
      }

      this.disposables = _uniq(this.disposables)
      return this
    }

    // add frame listner
    , beforeDraw( fn ){
      this.threeVue.$on( 'beforeDraw', fn )

      this.$on('hook:beforeDestroy', () => {
        this.threeVue.$off( 'beforeDraw', fn )
      })
    }

    , assignProps( dest, props ){
      for ( let prop of Object.keys(props) ){
        if ( prop in dest ){
          let val = this[prop]
          let cur = dest[prop]

          if (
            cur instanceof Color ||
            cur instanceof Vector3 ||
            cur instanceof Euler
          ){
            if ( Array.isArray(val) ){
              cur.fromArray( val )
              this.$emit(`update:${prop}`, cur)
            } else if ( typeof val === 'object' ){
              cur.copy( val )
              this.$emit(`update:${prop}`, cur)
            } else {
              cur.set( val )
              this.$emit(`update:${prop}`, cur)
            }
          } else {
            dest[ prop ] = val
            this.$emit(`update:${prop}`, val)
          }
        }
      }
    }
  }
}
