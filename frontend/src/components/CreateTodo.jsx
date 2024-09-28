export const CreateTodo = () => {
  return (
    <div>
      <input type="text" id="title" placeholder="Title" /><br />
      <input type="text" id="des" placeholder="Description" /><br />
      <button onClick={() => {
        fetch("http://localhost:3000/todos", {
          method: "POST",
          body: JSON.stringify({
            title: document.getElementById("title").value,  // Use value instead of innerHTML
            description: document.getElementById("des").value  // Use value instead of innerHTML
          }),
          headers: {
            "Content-Type": "application/json",  // Fixed header typo
          }
        })
        .then(async function(res) {
          const json = await res.json();
          alert("Todo added");
        })
        .catch(err => console.error("Error:", err));
      }}>
        Add a Todo
      </button>
    </div>
  );
}
