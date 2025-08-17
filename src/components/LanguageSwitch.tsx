import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSwitchProps {
  language: 'pt' | 'en';
  onLanguageChange: (lang: 'pt' | 'en') => void;
}

export const LanguageSwitch = ({ language, onLanguageChange }: LanguageSwitchProps) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4" />
      <div className="flex rounded-lg border p-1">
        <Button
          variant={language === 'pt' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('pt')}
          className="h-8 px-3 text-xs"
        >
          PT
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('en')}
          className="h-8 px-3 text-xs"
        >
          EN
        </Button>
      </div>
    </div>
  );
};