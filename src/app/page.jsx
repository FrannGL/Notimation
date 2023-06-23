import Info from "@/components/Info";
import NavBar from "@/components/NavBar";
import SectionOne from "@/components/SectionOne";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";

export default function Home() {
	return (
		<>
			<NavBar />
			<SectionOne />
			<SectionTwo />
			<Info />
			<SectionThree />
		</>
	);
}
