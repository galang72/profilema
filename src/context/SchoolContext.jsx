import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialSchoolData } from '../data/schoolData';

const LOCAL_STORAGE_KEY = 'MA_ALGHAZALI_SITE_DATA_V1';

const SchoolContext = createContext(null);

export const SchoolProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.identity) {
          parsed.identity.logoUrl = '/logo-alghazali.png';
        }
        parsed.principal = { ...initialSchoolData.principal, ...(parsed.principal || {}) };
        return parsed;
      }
    } catch (e) {
      console.warn('Failed to load local storage data:', e);
    }
    return initialSchoolData;
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save to local storage:', e);
    }
  }, [data]);

  const saveFullSchoolProfile = ({ identity, contact, visionMission, principal }) => {
    setData((prev) => {
      const updated = {
        ...prev,
        identity: identity ? { ...prev.identity, ...identity } : prev.identity,
        contact: contact ? { ...prev.contact, ...contact } : prev.contact,
        visionMission: visionMission ? { ...prev.visionMission, ...visionMission } : prev.visionMission,
        principal: principal ? { ...(prev.principal || initialSchoolData.principal), ...principal } : prev.principal,
      };
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn('Failed to save to local storage:', e);
      }
      return updated;
    });
  };

  const updateIdentity = (newIdentity) => {
    setData((prev) => ({
      ...prev,
      identity: { ...prev.identity, ...newIdentity }
    }));
  };

  const updateContact = (newContact) => {
    setData((prev) => ({
      ...prev,
      contact: { ...prev.contact, ...newContact }
    }));
  };

  const addArticle = (newArticle) => {
    setData((prev) => ({
      ...prev,
      articles: [newArticle, ...prev.articles]
    }));
  };

  const deleteArticle = (id) => {
    setData((prev) => ({
      ...prev,
      articles: prev.articles.filter((a) => a.id !== id)
    }));
  };

  const addGalleryItem = (newItem) => {
    setData((prev) => ({
      ...prev,
      gallery: [newItem, ...prev.gallery]
    }));
  };

  const deleteGalleryItem = (id) => {
    setData((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((g) => g.id !== id)
    }));
  };

  const addAchievement = (newAch) => {
    setData((prev) => ({
      ...prev,
      achievements: [newAch, ...prev.achievements]
    }));
  };

  const deleteAchievement = (id) => {
    setData((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((ach) => ach.id !== id)
    }));
  };

  const deletePpdbApplicant = (id) => {
    setData((prev) => ({
      ...prev,
      registeredApplicants: prev.registeredApplicants.filter((app) => app.id !== id)
    }));
  };

  const addFacility = (newFacility) => {
    setData((prev) => ({
      ...prev,
      facilities: [newFacility, ...(prev.facilities || [])]
    }));
  };

  const deleteFacility = (id) => {
    setData((prev) => ({
      ...prev,
      facilities: (prev.facilities || []).filter((fac) => fac.id !== id)
    }));
  };

  const updateVisionMission = (newVisionMission) => {
    setData((prev) => ({
      ...prev,
      visionMission: { ...prev.visionMission, ...newVisionMission }
    }));
  };

  const updatePrincipal = (newPrincipal) => {
    setData((prev) => ({
      ...prev,
      principal: { ...(prev.principal || initialSchoolData.principal), ...newPrincipal }
    }));
  };

  const updatePpdbInfo = (newPpdbInfo) => {
    setData((prev) => ({
      ...prev,
      ppdbInfo: { ...prev.ppdbInfo, ...newPpdbInfo }
    }));
  };

  const togglePpdbMasterStatus = (isOpen) => {
    setData((prev) => ({
      ...prev,
      ppdbInfo: { ...prev.ppdbInfo, isRegistrationOpen: isOpen }
    }));
  };

  const updateWaveStatus = (waveIndex, newStatus) => {
    setData((prev) => {
      const updatedWaves = [...(prev.ppdbInfo?.waves || [])];
      if (updatedWaves[waveIndex]) {
        updatedWaves[waveIndex] = { ...updatedWaves[waveIndex], status: newStatus };
      }
      return {
        ...prev,
        ppdbInfo: { ...prev.ppdbInfo, waves: updatedWaves }
      };
    });
  };

  const addWave = (newWave) => {
    setData((prev) => ({
      ...prev,
      ppdbInfo: {
        ...prev.ppdbInfo,
        waves: [...(prev.ppdbInfo?.waves || []), newWave]
      }
    }));
  };

  const deleteWave = (waveIndex) => {
    setData((prev) => ({
      ...prev,
      ppdbInfo: {
        ...prev.ppdbInfo,
        waves: (prev.ppdbInfo?.waves || []).filter((_, idx) => idx !== waveIndex)
      }
    }));
  };

  const addPpdbApplicant = (applicant) => {
    const registrationId = `REG-2026-${String(data.registeredApplicants.length + 1).padStart(3, '0')}`;
    const newRecord = {
      ...applicant,
      id: registrationId,
      status: 'Menunggu Verifikasi',
      date: new Date().toISOString().split('T')[0]
    };

    setData((prev) => ({
      ...prev,
      registeredApplicants: [newRecord, ...prev.registeredApplicants]
    }));

    return newRecord;
  };

  const updateApplicantStatus = (id, newStatus) => {
    setData((prev) => ({
      ...prev,
      registeredApplicants: prev.registeredApplicants.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    }));
  };

  const addContactMessage = (msg) => {
    const newMsg = {
      ...msg,
      id: `MSG-2026-${String((data.contactMessages?.length || 0) + 1).padStart(3, '0')}`,
      date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' WIB',
      status: 'Belum Dibaca'
    };
    setData((prev) => ({
      ...prev,
      contactMessages: [newMsg, ...(prev.contactMessages || [])]
    }));
    return newMsg;
  };

  const deleteContactMessage = (id) => {
    setData((prev) => ({
      ...prev,
      contactMessages: (prev.contactMessages || []).filter((msg) => msg.id !== id)
    }));
  };

  const markMessageRead = (id) => {
    setData((prev) => ({
      ...prev,
      contactMessages: (prev.contactMessages || []).map((msg) =>
        msg.id === id ? { ...msg, status: 'Sudah Dibaca' } : msg
      )
    }));
  };

  const resetToDefault = () => {
    setData(initialSchoolData);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <SchoolContext.Provider
      value={{
        data,
        saveFullSchoolProfile,
        updateIdentity,
        updateContact,
        updateVisionMission,
        updatePrincipal,
        addArticle,
        deleteArticle,
        addGalleryItem,
        deleteGalleryItem,
        addAchievement,
        deleteAchievement,
        addFacility,
        deleteFacility,
        updatePpdbInfo,
        togglePpdbMasterStatus,
        updateWaveStatus,
        addWave,
        deleteWave,
        addPpdbApplicant,
        deletePpdbApplicant,
        updateApplicantStatus,
        addContactMessage,
        deleteContactMessage,
        markMessageRead,
        resetToDefault,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};
