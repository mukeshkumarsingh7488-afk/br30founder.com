import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import Home from "./pages/Home.jsx";
import BosChoch from "./pages/BosChoch.jsx";
import BrokerSetup from "./pages/BrokerSetup.jsx";
import ChartingTools from "./pages/ChartingTools.jsx";
import EntryConfirmation from "./pages/EntryConfirmation.jsx";
import FairValueGaps from "./pages/FairValueGaps.jsx";
import FomoControll from "./pages/FomoControll.jsx";
import IndicatorSetup from "./pages/IndicatorSetup.jsx";
import KillZones from "./pages/KillZones.jsx";
import Learn from "./pages/Learn.jsx";
import LiquidityGrabs from "./pages/LiquidityGrabs.jsx";
import LossRecovery from "./pages/LossRecovery.jsx";
import Masterclass from "./pages/Masterclass.jsx";
import MultiTimeframe from "./pages/MultiTimeframe.jsx";
import NewsTerminals from "./pages/NewsTerminals.jsx";
import OrderBlocks from "./pages/OrderBlocks.jsx";
import PatiencePower from "./pages/PatiencePower.jsx";
import PoiAnalysis from "./pages/PoiAnalysis.jsx";
import PositionSizing from "./pages/PositionSizing.jsx";
import RiskRewardRatio from "./pages/RiskRewardRatio.jsx";
import StopLossDiscipline from "./pages/StopLossDiscipline.jsx";
import TradeJournaling from "./pages/TradeJournaling.jsx";
import TradingAnalysis from "./pages/TradingAnalysis.jsx";
import TradingDiscipline from "./pages/TradingDiscipline.jsx";
import WebService from "./pages/WebService.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/BOS-CHoCH" element={<BosChoch />} />
          <Route path="/broker-setup" element={<BrokerSetup />} />
          <Route path="/charting-tools" element={<ChartingTools />} />
          <Route path="/entry-confirmation" element={<EntryConfirmation />} />
          <Route path="/fair-value-gaps" element={<FairValueGaps />} />
          <Route path="/fomo-controll" element={<FomoControll />} />
          <Route path="/indicator-setup" element={<IndicatorSetup />} />
          <Route path="/kill-zones" element={<KillZones />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/liquidity-grabs" element={<LiquidityGrabs />} />
          <Route path="/loss-recovery" element={<LossRecovery />} />
          <Route path="/masterclass" element={<Masterclass />} />
          <Route path="/multi-timeframe" element={<MultiTimeframe />} />
          <Route path="/news-terminals" element={<NewsTerminals />} />
          <Route path="/order-blocks" element={<OrderBlocks />} />
          <Route path="/patience-power" element={<PatiencePower />} />
          <Route path="/poi-analysis" element={<PoiAnalysis />} />
          <Route path="/position-sizing" element={<PositionSizing />} />
          <Route path="/risk-reward-ratio" element={<RiskRewardRatio />} />
          <Route
            path="/stop-loss-discipline"
            element={<StopLossDiscipline />}
          />
          <Route path="/trade-journaling" element={<TradeJournaling />} />
          <Route path="/trading-analysis" element={<TradingAnalysis />} />
          <Route path="/trading-discipline" element={<TradingDiscipline />} />
          <Route path="/web-service" element={<WebService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
