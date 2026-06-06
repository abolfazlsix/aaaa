import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";  // حذف BrowserRouter از اینجا
import Header from "./componnet/layut/Header";
import Vaghaye from "./page/vaghaye/Vaghaye";
import VaghayeDetail from "./page/vaghaye/VaghayeDetail";
import ZendegiNameh from "./page/ZendegiNameh";
import StoryDetail from "./page/StoryDetail";
import HelpMoakab from "./page/HelpMoakab";
import Footer from "./componnet/layut/Footer";
import MoakabGallery from "./page/MoakabGallery";
import AbolfazlResume from "./page/AbolfazlResume";
import "./App.css";

function AppContent() {
    const [selectedStory, setSelectedStory] = useState(null);
    const [showStoryDetail, setShowStoryDetail] = useState(false);
    const [selectedVaghaye, setSelectedVaghaye] = useState(null);
    const [showVaghayeDetail, setShowVaghayeDetail] = useState(false);
    const navigate = useNavigate();
    
    const handleStoryClick = (story) => {
        setSelectedStory(story);
        setShowStoryDetail(true);
        window.scrollTo(0, 0);
    };
    
    const handleStoryBack = () => {
        setShowStoryDetail(false);
        setSelectedStory(null);
    };
    
    const handleVaghayeClick = (item) => {
        setSelectedVaghaye(item);
        setShowVaghayeDetail(true);
        window.scrollTo(0, 0);
    };
    
    const handleVaghayeBack = () => {
        setShowVaghayeDetail(false);
        setSelectedVaghaye(null);
    };
    
    const isInDetail = showStoryDetail || showVaghayeDetail;
    
    const handleResumeClick = () => {
        navigate("/resume");
    };
    
    return (
        <>
            <Header />
            <main className="main-content">
                {!showStoryDetail && !showVaghayeDetail && (
                    <>
                        <Vaghaye onCardClick={handleVaghayeClick} />
                        <MoakabGallery />
                        <ZendegiNameh onStoryClick={handleStoryClick} />
                        <HelpMoakab />
                    </>
                )}
                {showVaghayeDetail && selectedVaghaye && (
                    <VaghayeDetail day={selectedVaghaye} onBack={handleVaghayeBack} />
                )}
                {showStoryDetail && selectedStory && (
                    <StoryDetail story={selectedStory} onBack={handleStoryBack} />
                )}
            </main>
            {!isInDetail && <Footer onResumeClick={handleResumeClick} />}
        </>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppContent />} />
            <Route path="/resume" element={<AbolfazlResume />} />
        </Routes>
    );
}

export default App;