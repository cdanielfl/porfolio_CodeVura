import React, { useState } from "react";
import { motion } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Calendar, Clock, FileText, CheckCircle2, ArrowRight, Wrench } from "lucide-react";
import { SERVICES, localizeServices } from "../../data/mockData";
import { mech } from "../../lib/paths";
import { resolveDemoLanguage } from "../../../../../utils/demoLanguage";

export const Schedule: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const services = localizeServices(SERVICES, lang);
  const text =
    lang === "pt"
      ? {
          title: "Agendar servico",
          subtitle: "Marque seu atendimento em poucos passos.",
          selectService: "Escolha o servico",
          continue: "Continuar",
          dateTime: "Data e horario",
          selectDate: "Escolha a data",
          selectTime: "Escolha o horario",
          selectSlot: "Selecione um horario",
          back: "Voltar",
          finalDetails: "Detalhes finais",
          notes: "Observacoes adicionais",
          notesPlaceholder: "Descreva qualquer sintoma ou detalhe do veiculo...",
          service: "Servico",
          date: "Data",
          time: "Horario",
          confirm: "Confirmar agendamento",
          confirmed: "AGENDAMENTO CONFIRMADO!",
          confirmedText: "Seu servico foi agendado. Voce recebera a confirmacao em breve.",
          viewAppointments: "Ver meus atendimentos",
        }
      : {
          title: "Schedule Service",
          subtitle: "Book your appointment in a few simple steps.",
          selectService: "Select Service",
          continue: "Continue",
          dateTime: "Date & Time",
          selectDate: "Select Date",
          selectTime: "Select Time",
          selectSlot: "Select a slot",
          back: "Back",
          finalDetails: "Final Details",
          notes: "Additional Notes",
          notesPlaceholder: "Tell us about any specific issues with your vehicle...",
          service: "Service",
          date: "Date",
          time: "Time",
          confirm: "Confirm Appointment",
          confirmed: "APPOINTMENT CONFIRMED!",
          confirmedText: "Your service has been scheduled. You'll receive a confirmation email shortly.",
          viewAppointments: "View My Appointments",
        };
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Success state
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-black tracking-tighter mb-2 uppercase">{text.title}</h1>
        <p className="text-gray-500 font-medium">{text.subtitle}</p>
      </header>

      {/* Progress Bar */}
      <div className="flex items-center justify-between px-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all ${
              step >= s ? "bg-blue-600 text-white" : "bg-zinc-900 text-gray-600 border border-white/5"
            }`}>
              {s}
            </div>
            {s < 3 && (
              <div className={`w-12 sm:w-20 md:w-40 h-1 mx-1 md:mx-2 rounded-full ${
                step > s ? "bg-blue-600" : "bg-zinc-900"
              }`} />
            )}
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-8">
              <Wrench className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-bold">{text.selectService}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setFormData({ ...formData, serviceId: service.id })}
                  className={`p-6 rounded-2xl border text-left transition-all ${
                    formData.serviceId === service.id 
                      ? "bg-blue-600 border-blue-600 text-white" 
                      : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <div className="font-bold mb-1">{service.title}</div>
                  <div className={`text-xs ${formData.serviceId === service.id ? "text-blue-100" : "text-gray-500"}`}>
                    {service.price}
                  </div>
                </button>
              ))}
            </div>
            <button
              disabled={!formData.serviceId}
              onClick={handleNext}
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center space-x-2"
            >
              <span>{text.continue}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-8">
              <Calendar className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-bold">{text.dateTime}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">{text.selectDate}</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">{text.selectTime}</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                >
                  <option value="">{text.selectSlot}</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:30 PM">02:30 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <button
                onClick={handleBack}
                className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-2xl transition-all border border-white/10"
              >
                {text.back}
              </button>
              <button
                disabled={!formData.date || !formData.time}
                onClick={handleNext}
                className="flex-[2] bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center space-x-2"
              >
                <span>{text.continue}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-8">
              <FileText className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-bold">{text.finalDetails}</h2>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">{text.notes}</label>
              <textarea
                rows={4}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder={text.notesPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{text.service}:</span>
                <span className="font-bold">{services.find((s) => s.id === formData.serviceId)?.title}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{text.date}:</span>
                <span className="font-bold">{formData.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{text.time}:</span>
                <span className="font-bold">{formData.time}</span>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <button
                onClick={handleBack}
                className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-2xl transition-all border border-white/10"
              >
                {text.back}
              </button>
              <button
                onClick={handleSubmit}
                className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center space-x-2"
              >
                <span>{text.confirm}</span>
                <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-6"
          >
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-black tracking-tighter">{text.confirmed}</h2>
            <p className="text-gray-500 max-w-sm mx-auto">
              {text.confirmedText}
            </p>
            <button
              onClick={() => navigate(mech("dashboard/appointments"))}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all border border-white/10"
            >
              {text.viewAppointments}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
