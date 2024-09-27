import React, { useState } from "react";

const AdminPage = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [icon, setIcon] = useState("");
  const [parent, setParent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return <div>AdminPage AdminPage</div>;
};

export default AdminPage;
