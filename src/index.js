import "./index.scss"

// зареєструємо новий тип блоку
wp.blocks.registerBlockType("wpreactnamespace/wp-react-guten-block", {
  title: "WP REACT",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {

    input1: { type: "string" },
    input2: { type: "string" }
    
  },
  edit: EditComponent,
  save: function () {
    return null
  }
})

function EditComponent(props) {
  function updateValueInput1(e) {
    props.setAttributes({ input1: e.target.value })
  }

  function updateValueInput2(e) {
    props.setAttributes({ input2: e.target.value })
  }

  return (
    <div className="wpReactGutenBlock">

      <input 
      
      type="text" 
      value={props.attributes.input1} 
      onChange={updateValueInput1} 
      placeholder="input1 ..." />

      <input 
      
      type="text" 
      value={props.attributes.input2} 
      onChange={updateValueInput2} 
      placeholder="input2 ..." />

    </div>
  )
}
