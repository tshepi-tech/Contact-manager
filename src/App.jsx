import "./App.css";
import { ContactPage } from "./components/ContactPage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<div className="App">
			<ChakraProvider>
				<ContactPage />
			</ChakraProvider>
		</div>
	);
}

export default App;
