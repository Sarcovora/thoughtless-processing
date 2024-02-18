import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TableView from "./TableView"; 
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

export default function Home() {
  return (
      <div>
        <Navbar>
          <NavbarBrand>
            <p className="font-bold text-inherit">thoughtless.</p>
          </NavbarBrand>
          <NavbarContent
            className="hidden sm:flex gap-4"    
            justify="center"
          ></NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem isActive className="pr-4">
              <Link to="/" className="nav-link">Dashboard</Link>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
              <Link to="/login" className="nav-link">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" to="/signup" variant="flat" className="nav-button">
                Sign Up
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} to="/tableview" variant="flat" className="nav-button">
                Table View
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold">thoughtless.</h1>
        </div>
      </div>
  );
}
