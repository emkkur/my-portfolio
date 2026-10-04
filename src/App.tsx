import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from '@/landing/page';
import { ParticleBg } from '@/components';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/landing" replace />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Navigate to="/landing" replace />} />
        </Routes>
      </BrowserRouter>
      <ParticleBg />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
