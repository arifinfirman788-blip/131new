import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Layers, 
  Lightbulb, 
  Settings, 
  Users, 
  Zap, 
  ShoppingBag, 
  UserCircle,
  LayoutDashboard,
  Cpu,
  ArrowRight,
  PlayCircle,
  Network,
  Share2,
  Rocket,
  Globe,
  Briefcase,
  UserCheck
} from 'lucide-react';

const Section = ({ id, title, icon: Icon, children, delay = 0, gradient = "from-indigo-600 to-violet-600" }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="mb-32 scroll-mt-24"
  >
    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
      <div className={`p-5 bg-gradient-to-br ${gradient} text-white rounded-[24px] shadow-xl shadow-indigo-100 shrink-0 self-start`}>
        <Icon size={40} />
      </div>
      <div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">{title}</h2>
        <div className="h-2 w-32 bg-indigo-600 rounded-full mt-4" />
      </div>
    </div>
    {children}
  </motion.section>
);

const Card = ({ title, description, imagePlaceholder, delay = 0, badge, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-2xl hover:shadow-indigo-50 hover:-translate-y-2 flex flex-col h-full"
  >
    <div className="relative h-64 bg-slate-50 overflow-hidden flex items-center justify-center p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-indigo-50/30" />
      <div className="relative z-10 flex flex-col items-center text-center">
        {Icon && <div className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-500"><Icon size={48} /></div>}
        <div className="text-slate-400 italic text-sm font-medium px-4">
          {imagePlaceholder || '可视化设计稿预留'}
        </div>
      </div>
      {badge && (
        <div className="absolute top-6 right-6 bg-slate-900 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-widest">
          {badge}
        </div>
      )}
    </div>
    <div className="p-10 flex flex-col flex-grow">
      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-lg font-medium">{description}</p>
    </div>
  </motion.div>
);

const SubSectionTitle = ({ children }) => (
  <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-8 mt-12 flex items-center gap-3">
    <div className="w-2 h-8 bg-indigo-600 rounded-full" />
    {children}
  </h3>
);

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex gap-6 p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:border-indigo-200 transition-all group">
    <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
      <Icon size={32} />
    </div>
    <div>
      <h4 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{title}</h4>
      <p className="text-slate-600 leading-relaxed text-lg font-medium">{description}</p>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <Cpu size={24} />
            </div>
            <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase">AI <span className="text-indigo-600">Product</span></span>
          </div>
          <nav className="hidden lg:flex gap-10 text-xs font-black text-slate-500 uppercase tracking-[0.2em]">
            <a href="#regional" className="hover:text-indigo-600 transition-colors">区域智能网络</a>
            <a href="#enterprise" className="hover:text-indigo-600 transition-colors">企业级方案</a>
            <a href="#personal" className="hover:text-indigo-600 transition-colors">个人劳动者</a>
          </nav>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-md">
            立即开始
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <section className="text-center mb-40 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50 rounded-full blur-[140px] opacity-40 -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-block px-6 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-10">
              Product Design Strategic Report
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.85]">
              云码通转型与 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">
                AI 超级应用
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto leading-relaxed mb-16 font-medium tracking-tight">
              重构服务关系，定义未来生态。通过区域、企业、个人三位一体的智能体布局，打造全新的 AI 数字化生存样板。
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#regional" className="bg-indigo-600 text-white px-12 py-5 rounded-full font-black hover:bg-indigo-700 transition-all flex items-center gap-3 shadow-2xl shadow-indigo-100 hover:scale-105">
                进入汇报 <ArrowRight size={24} />
              </a>
              <button className="bg-white text-slate-900 border-2 border-slate-100 px-12 py-5 rounded-full font-black hover:bg-slate-50 transition-all flex items-center gap-3 hover:scale-105 shadow-sm">
                架构概览 <Layers size={24} />
              </button>
            </div>
          </motion.div>
        </section>

        {/* 一、构筑AI超级应用：面向区域的智能体网络 */}
        <Section id="regional" title="一、构筑AI超级应用：面向区域的智能体网络" icon={Globe} gradient="from-blue-600 to-indigo-600">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="bg-[#0F172A] rounded-[48px] p-12 md:p-20 text-white relative overflow-hidden flex flex-col justify-center">
              <div className="relative z-10">
                <h4 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-6">核心目标</h4>
                <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight">云码通转型 <br />全域样板输出</h3>
                <div className="space-y-8">
                  {[
                    "推广统一产品设计思想与架构内容",
                    "确立门户级 AI 超级应用设计样板",
                    "构建区域级调度智能体（组织级智能体）"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center shrink-0 border border-indigo-500/30 text-indigo-400">
                        <Target size={20} />
                      </div>
                      <span className="text-xl text-slate-300 font-bold">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
            </div>
            <div className="bg-indigo-50 rounded-[48px] p-12 flex flex-col justify-between border border-indigo-100 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-indigo-600 font-black uppercase tracking-widest text-sm mb-6">未来生态</h4>
                <h3 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight">日抛型应用 <br />敏捷生态体系</h3>
                <p className="text-slate-600 text-xl font-bold leading-relaxed mb-10">
                  AI 使极速生成、随用随弃的“日抛型”应用成为可能。我们将重构从销售到运营到开发的系统组织，建立全新的敏捷生态理念。
                </p>
                <div className="flex flex-wrap gap-4">
                  {['组织重构', '极速生成', 'AI 驱动', '按需销毁'].map(t => (
                    <span key={t} className="bg-white px-6 py-3 rounded-2xl text-indigo-600 font-black text-sm shadow-sm border border-indigo-100 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/50 rounded-full blur-[100px]" />
            </div>
          </div>
        </Section>

        {/* 二、面向企业的应用级智能体系列方案 */}
        <Section id="enterprise" title="二、面向企业的应用级智能体系列方案" icon={Briefcase} gradient="from-violet-600 to-purple-600">
          <SubSectionTitle>项目范围与迭代逻辑</SubSectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <Card 
              title="黄小西" 
              description="明确项目设计现状，作为企业级智能体的首选试点与能力验证中心。"
              imagePlaceholder="[黄小西业务智能体设计稿]"
              badge="首选试点"
              icon={Network}
            />
            <Card 
              title="西城家园" 
              description="确立标准化的产品迭代思路，输出可快速复用的企业级服务模式。"
              imagePlaceholder="[西城家园迭代模型]"
              badge="标准输出"
              delay={0.1}
              icon={Share2}
            />
            <Card 
              title="贵人家园" 
              description="深度对标西城家园迭代思路，实现企业级服务能力的快速迁移与优化。"
              imagePlaceholder="[贵人家园复用方案]"
              badge="快速复用"
              delay={0.2}
              icon={Rocket}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <FeatureItem 
              icon={Layers}
              title="企业级服务智能体"
              description="垂直于企业特定业务场景，提供深度数字化的专业服务，解决企业运营中的痛点问题。"
            />
            <FeatureItem 
              icon={ShoppingBag}
              title="全通盘供应链基础设施"
              description="形成统一的供应链底座，每个项目均内置自营商城与“黄晓曦精选”概念入口，共享资源优势。"
            />
          </div>
        </Section>

        {/* 三、面向个人的劳动者智能体 */}
        <Section id="personal" title="三、面向个人的劳动者智能体" icon={UserCheck} gradient="from-pink-600 to-rose-600">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-slate-900 rounded-[48px] p-12 text-white flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 text-indigo-400">
                  <PlayCircle size={32} />
                  <span className="font-black uppercase tracking-[0.2em] text-sm">首页展现方式</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">多模态视频展现 <br />唤起交互欲望</h3>
                <p className="text-slate-400 text-xl font-medium leading-relaxed mb-12">
                  尽可能将功能级或企业级智能体以多模态形式呈现，通过沉浸式视频内容直接唤起用户的交互欲望。
                </p>
              </div>
              <div className="relative z-10 aspect-video bg-slate-800 rounded-[32px] border border-white/5 flex items-center justify-center italic text-slate-600 group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden font-bold">
                [多模态首页交互动态演示]
              </div>
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="bg-rose-50 rounded-[48px] p-12 flex flex-col justify-between border border-rose-100">
              <div>
                <div className="flex items-center gap-4 mb-8 text-rose-600">
                  <Zap size={32} />
                  <span className="font-black uppercase tracking-[0.2em] text-sm">需求预判</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-tight">行程提前侦测 <br />主动完成闭环</h3>
                <p className="text-slate-600 text-xl font-medium leading-relaxed mb-12">
                  预测用户下一个动作，通过用户行程提前侦测需求，在用户感知前预判并完成服务闭环。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {['行程感知', '需求建模', '服务预演', '无感闭环'].map((t, i) => (
                  <div key={i} className="bg-white p-6 rounded-[24px] shadow-sm border border-rose-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                      <Target size={24} />
                    </div>
                    <span className="font-black text-slate-700 tracking-tight uppercase text-xs">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <UserCircle size={32} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">个人数字分身级智能体</h4>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">面向个人的数字化代理，连接社交与生活场景，实现高度个性化的智能交互。</p>
            </div>
            <div className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-violet-600 group-hover:text-white transition-all">
                <Share2 size={32} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">全域分身创建入口</h4>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">统一的个人数字分身入口，与个人名片逻辑深度打通，支持跨项目身份识别。</p>
            </div>
            <div className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-pink-600 group-hover:text-white transition-all">
                <Settings size={32} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">主动注册与运营</h4>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">重构服务关系，让用户主动发起注册并生成智能体，从被动服务升级为平台共建者。</p>
            </div>
          </div>
        </Section>
      </main>

      <footer className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <Cpu size={28} />
              </div>
              <span className="font-black text-3xl tracking-tighter text-slate-900">AI STRATEGIC REPORT</span>
            </div>
            <p className="text-slate-500 font-bold text-xl max-w-sm text-center md:text-left leading-relaxed">
              构筑 AI 超级应用，定义数字化未来的新样板。
            </p>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col gap-6">
              <span className="font-black text-xs uppercase tracking-[0.3em] text-slate-400">板块导航</span>
              <a href="#regional" className="font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-sm">区域网络</a>
              <a href="#enterprise" className="font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-sm">企业方案</a>
              <a href="#personal" className="font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-sm">个人分身</a>
            </div>
            <div className="flex flex-col gap-6">
              <span className="font-black text-xs uppercase tracking-[0.3em] text-slate-400">资源链接</span>
              <a href="#" className="font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-sm">架构图谱</a>
              <a href="#" className="font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-sm">设计规范</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 font-black text-sm tracking-[0.2em] uppercase">© 2026 AI STRATEGY GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <Share2 className="text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors" size={24} />
            <Settings className="text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors" size={24} />
            <Globe className="text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors" size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
