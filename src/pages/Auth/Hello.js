import React from "react";

export default function Hello({ handleLogout }) {
  return (
    <section className="hero">
      <section>
        <h2>Welcome to Car Wax</h2>
        <button className="buttonA" onClick={handleLogout}>
          <b>Sign out</b>
        </button>
      </section>
    </section>
  );
}
