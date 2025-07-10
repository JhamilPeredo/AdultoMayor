import { SafeTypography } from "@/components/SafeMaterial";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="pb-10 px-8 pt-20 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <SafeTypography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Centro de Ancianos Vida Feliz - El Torno
          </SafeTypography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
