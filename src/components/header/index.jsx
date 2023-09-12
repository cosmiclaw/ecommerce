import "./header.css";

import * as React from "react";

import { Input, Select } from "@components";

export function Header({ type, setType, query, setQuery, handleSearchSubmit }) {
  return (
    <div className="header">
      <div className="type">
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="html">All Templates</option>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
          <option value="gift">Gift</option>
        </Select>
      </div>
      <form onSubmit={handleSearchSubmit} className="search">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          LeftIcon={<i className="fa-solid fa-magnifying-glass icon"></i>}
          placeholder="Search"
        />
      </form>
    </div>
  );
}
