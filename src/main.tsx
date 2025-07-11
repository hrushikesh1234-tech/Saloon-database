import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/components/theme-provider'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <App />
  </ThemeProvider>
);
