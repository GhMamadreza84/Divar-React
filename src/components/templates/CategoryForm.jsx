
const CategoryForm = () => {
  return (
    <form>
       <h3>دسته بندی جدید</h3>
       <label htmlFor="name">اسم دسته بندی</label>
       <input type="text" name="name" id="name" />

       <label htmlFor="slug">اسلاگ</label>
       <input type="text" slug="slug" id="slug" />

       <label htmlFor="icon">آیکون</label>
       <input type="text" name="icon" id="icon" />
    </form>
  );
}

export default CategoryForm;