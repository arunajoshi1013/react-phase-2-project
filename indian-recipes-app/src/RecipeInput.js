function RecipeInput() {
  return (
    <form onSubmit={submit}>
        <label htmlFor="name"> Name </label>
        <input type="name" name="name" onChange={update}/>

        <label htmlFor="img">Image url</label>
        <input type="url" name="url" onChange={update}/>

        <label htmlFor="short">Short description</label>
        <input type="desc" name="desc" onChange={update}/>

        <label htmlFor="detail">Recipe details</label>
        <input type="detail" name="detail" onChange={update}/>

        <button>Add new recipe</button>
    </form>
  )
}

export default RecipeInput;