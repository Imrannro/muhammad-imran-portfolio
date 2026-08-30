import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, CheckCircle2, Terminal as TerminalIcon, ShieldCheck, Box, GitBranch, Cpu, ArrowRight, Check } from 'lucide-react';
import { personalInfo, certificationsData, additionalInfoData } from '../data/portfolioData';

interface Stage {
  id: string;
  name: string;
  command: string;
  duration: number; // ms
  log: string;
  details: string;
}

const pipelineStages: Stage[] = [
  {
    id: 'checkout',
    name: '1. Actions Checkout',
    command: 'actions/checkout@v4',
    duration: 500,
    log: '[checkout] Fetching repository refs/heads/main at commit e48a129...',
    details: '✓ Workspace initialized. HEAD at e48a129 (feat: automated multi-stage CI/CD pipeline)'
  },
  {
    id: 'build',
    name: '2. Dependency Setup',
    command: 'npm ci && pip install -r requirements.txt',
    duration: 600,
    log: '[build] Resolving package locks, installing dependencies in isolated cache...',
    details: '✓ Dependencies resolved with 0 vulnerabilities. Build cache synced.'
  },
  {
    id: 'test',
    name: '3. Automated Test Suite',
    command: 'pytest -v && npm test -- --coverage',
    duration: 700,
    log: '[test] Running unit tests, API schema tests & integration suites...',
    details: '✓ PASS test_routes.py (14ms) | PASS test_auth.py (22ms) — 100% tests passed.'
  },
  {
    id: 'lint',
    name: '4. Lint & Code Quality',
    command: 'npm run lint && flake8',
    duration: 600,
    log: '[lint] Executing static analysis, ESLint standards, and Python flake8 checks...',
    details: '✓ 0 errors, 0 warnings. Code quality gates passed before merge.'
  },
  {
    id: 'docker',
    name: '5. Docker Multi-Stage Build',
    command: 'docker build --target production -t imran/app:v2.6 .',
    duration: 900,
    log: '[docker] Authoring production-ready Dockerfile with multi-stage builds...',
    details: '✓ Multi-stage image generated: runtime footprint minimized by 65%.'
  },
  {
    id: 'devsecops',
    name: '6. DevSecOps Security Gate',
    command: 'trivy image --severity HIGH,CRITICAL imran/app:v2.6',
    duration: 600,
    log: '[security] Scanning container image & dependencies for CVE vulnerabilities...',
    details: '✓ 0 HIGH / 0 CRITICAL CVEs detected. Branch protection security passed.'
  },
  {
    id: 'deploy',
    name: '7. Zero-Touch Deployment',
    command: 'bash scripts/deploy.sh --target=production',
    duration: 800,
    log: '[deploy] GitHub Actions workflow triggered → auto-deployed to production...',
    details: '✓ Zero-touch release deployed on push to main branch with zero downtime.'
  },
  {
    id: 'health',
    name: '8. Post-Deploy Healthcheck',
    command: 'curl -fsS https://app/health/status',
    duration: 500,
    log: '[health] Executing automated liveness probes and status check badges...',
    details: '✓ HTTP 200 OK — Status badges updated on repository. Pipeline succeeded!'
  }
];

export const PipelineSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(-1);
  const [completedStages, setCompletedStages] = useState<string[]>([]);
  const [logs, setLogs] = useState<string[]>([
    'System ready. Click "RUN PIPELINE WORKFLOW" to simulate the automated GitHub Actions CI/CD deployment.'
  ]);
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState<{ command: string; output: string }[]>([
    {
      command: 'status',
      output: 'All CI/CD runners online (ubuntu-latest). Muhammad Imran DevOps profile loaded.'
    }
  ]);

  const logContainerRef = useRef<HTMLDivElement>(null);
  const cliContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => {
    if (cliContainerRef.current) {
      cliContainerRef.current.scrollTop = cliContainerRef.current.scrollHeight;
    }
  }, [cliHistory]);

  const resetPipeline = () => {
    setIsRunning(false);
    setCurrentStageIndex(-1);
    setCompletedStages([]);
    setLogs([
      'Pipeline reset. System ready. Click "RUN PIPELINE WORKFLOW" to execute the GitHub Actions automation.'
    ]);
  };

  const runPipeline = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStageIndex(0);
    setCompletedStages([]);
    setLogs([
      `[${new Date().toLocaleTimeString()}] Pipeline triggered by event: push (branch: refs/heads/main)`,
      'Initializing GitHub Actions runner on ubuntu-latest...',
      'Enforcing branch protection rules and automated status checks...'
    ]);

    for (let i = 0; i < pipelineStages.length; i++) {
      const stage = pipelineStages[i];
      setCurrentStageIndex(i);
      setLogs((prev) => [
        ...prev,
        `\n> Running Stage: ${stage.name} ($ ${stage.command})`,
        stage.log
      ]);

      await new Promise((res) => setTimeout(res, stage.duration));

      setLogs((prev) => [...prev, stage.details]);
      setCompletedStages((prev) => [...prev, stage.id]);
    }

    setLogs((prev) => [
      ...prev,
      `\n================================================================`,
      `🚀 RELEASE AUTO-DEPLOYED SUCCESSFULLY AT ${new Date().toLocaleTimeString()}`,
      `Workflow: build → test → lint → containerize → deploy | Zero Manual Effort (-70%)`,
      `================================================================`
    ]);
    setIsRunning(false);
    setCurrentStageIndex(pipelineStages.length);
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = cliInput.trim().toLowerCase();
    if (!cmd) return;

    let response = '';
    switch (cmd) {
      case 'help':
        response =
          'Available commands:\n  • deploy       - Trigger automated CI/CD pipeline simulation\n  • whoami       - Display developer summary & graduation info\n  • skills       - List technical skill clusters\n  • projects     - Summary of key production projects\n  • certs        - Display verified Simplilearn certifications\n  • contact      - Show phone, email, and social profiles\n  • reset        - Reset the pipeline console\n  • clear        - Clear terminal history';
        break;
      case 'deploy':
        runPipeline();
        response = 'Triggering automated CI/CD pipeline workflow... Watch the live runners above!';
        break;
      case 'reset':
        resetPipeline();
        response = 'Pipeline state reset to initial readiness.';
        break;
      case 'whoami':
        response = `${personalInfo.name}\n${personalInfo.title}\nLocation: ${personalInfo.location}\nEducation: BS Software Engineering (NUML, Graduated July 2026, CGPA: 3.1/4.0)\nAvailability: Immediately available for full-time roles`;
        break;
      case 'skills':
        response =
          '• DevOps & CI/CD: GitHub Actions, YAML Workflows, Build-Test-Lint-Deploy, Zero-Downtime Releases\n• Containers & Infra: Docker, Multi-Stage Builds, Kubernetes (Fundamentals), Linux Admin, Bash\n• DevSecOps & Security: Kali Linux, Nmap Network Scanning, Vulnerability Scanning, Security Gates\n• Programming: Python, Bash, C++, Java, HTML5, CSS3, JavaScript, GDScript\n• Web & Frameworks: Flask (Python), REST API, SQLite, Three.js, GSAP, Responsive Web\n• Tools: Git, GitHub, Linux CLI, VS Code, Godot Engine, Postman';
        break;
      case 'projects':
        response =
          '1. Automated CI/CD Pipeline (GitHub Actions, YAML, Docker, GitHub Pages, Bash)\n2. Personal DevOps Portfolio Website (HTML, CSS, JS, Three.js, GSAP, GitHub Actions)\n3. E-Commerce Web Application (HTML, CSS, JS, Python Flask, SQLite, GitHub Actions)\n4. Ranikot Chronicles 3D Cultural Game (Godot Engine, GDScript, AI Pathfinding — FYP Lead)';
        break;
      case 'certs':
        response = certificationsData
          .map((c) => `• ${c.title} — ${c.issuer} (${c.issueDate} | ID: ${c.credentialId})`)
          .join('\n');
        break;
      case 'contact':
        response = `Email: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}\nPortfolio: ${personalInfo.portfolioUrl}`;
        break;
      case 'clear':
        setCliHistory([]);
        setCliInput('');
        return;
      default:
        response = `Command not found: "${cmd}". Type "help" to see available terminal commands.`;
        break;
    }

    setCliHistory((prev) => [...prev, { command: cliInput, output: response }]);
    setCliInput('');
  };

  const isCompleted = currentStageIndex === pipelineStages.length;

  return (
    <section id="pipeline-simulator" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a]" />
            <span className="font-mono text-xs tracking-wider text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] uppercase font-semibold">
              LIVE WORKFLOW AUTOMATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 tracking-[-0.04em]">
            CI/CD Pipeline Simulator<span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">.</span>
          </h2>
          <p className="text-[#6b6b6b] dark:text-[#9e9e9e] light:text-slate-600 text-sm sm:text-base mt-2 max-w-xl font-normal">
            Interactive demonstration of my automated GitHub Actions build → test → lint → deploy workflow with Docker multi-stage containerization.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          {isCompleted && (
            <button
              onClick={resetPipeline}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-slate-200 text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 hover:text-[#22d472] border border-[#212121] dark:border-[#212121] light:border-slate-300 transition-all cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>RESET</span>
            </button>
          )}

          <button
            id="run-pipeline-simulator-btn"
            onClick={runPipeline}
            disabled={isRunning}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer ${
              isRunning
                ? 'bg-[#212121] dark:bg-[#212121] light:bg-slate-200 text-[#6b6b6b] dark:text-[#6b6b6b] light:text-slate-500 cursor-not-allowed'
                : 'bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] text-[#0a0a0a] light:text-white hover:bg-[#18a355] shadow-[0_0_20px_rgba(34,212,114,0.3)]'
            }`}
          >
            {isCompleted ? (
              <>
                <RotateCcw className="w-4 h-4" />
                <span>RE-RUN PIPELINE</span>
              </>
            ) : (
              <>
                <Play className={`w-4 h-4 ${isRunning ? 'animate-pulse' : ''}`} />
                <span>{isRunning ? 'PIPELINE EXECUTING...' : 'RUN PIPELINE WORKFLOW'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Workflow Container */}
      <div className="rounded-2xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 overflow-hidden shadow-2xl">
        
        {/* Stages Progress Bar Track */}
        <div className="p-4 sm:p-5 bg-[#161616] dark:bg-[#161616] light:bg-slate-100/70 border-b border-[#212121] dark:border-[#212121] light:border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {pipelineStages.map((stage, idx) => {
              const isDone = completedStages.includes(stage.id);
              const isCurrent = currentStageIndex === idx && isRunning;

              return (
                <div
                  key={stage.id}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isDone
                      ? 'bg-[#22d472]/10 dark:bg-[#22d472]/10 light:bg-emerald-50 border-[#22d472]/40 dark:border-[#22d472]/40 light:border-emerald-300 text-[#f2f2f2] dark:text-[#f2f2f2] light:text-emerald-950'
                      : isCurrent
                      ? 'bg-[#1e1e1e] dark:bg-[#1e1e1e] light:bg-white border-[#22d472] dark:border-[#22d472] light:border-[#16a34a] text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] shadow-[0_0_16px_rgba(34,212,114,0.2)]'
                      : 'bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-white border-[#212121] dark:border-[#212121] light:border-slate-200 text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs uppercase font-bold tracking-wider">
                      Step 0{idx + 1}
                    </span>
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
                    ) : isCurrent ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a] animate-ping" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-[#212121] dark:bg-[#212121] light:bg-slate-300" />
                    )}
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold truncate text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900">
                    {stage.name.replace(/^\d+\.\s*/, '')}
                  </div>
                  <div className="font-mono text-xs text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 truncate mt-1">
                    {stage.command}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Two-Pane Terminal Console (Live Stream + Interactive CLI) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#212121] dark:divide-[#212121] light:divide-slate-800">
          
          {/* Left Pane: Live CI Logs Streaming */}
          <div className="lg:col-span-7 p-4.5 bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-950 flex flex-col justify-between h-[320px] sm:h-[340px]">
            <div className="flex items-center justify-between pb-2.5 border-b border-[#212121] dark:border-[#212121] light:border-slate-800 text-xs sm:text-sm font-mono text-[#6b6b6b] font-medium">
              <span className="flex items-center gap-2">
                <TerminalIcon className="w-4 h-4 text-[#22d472]" />
                github-actions / workflow-dispatch
              </span>
              <span className="text-xs text-[#22d472] bg-[#22d472]/10 px-2.5 py-0.5 rounded border border-[#22d472]/20 font-semibold">
                RUNNER: UBUNTU-LATEST
              </span>
            </div>

            <div ref={logContainerRef} className="overflow-y-auto font-mono text-xs sm:text-sm space-y-1.5 py-2.5 text-[#f2f2f2]/90 flex-1 select-text">
              {logs.map((log, i) => (
                <div
                  key={i}
                  className={`${
                    log.startsWith('>')
                      ? 'text-[#22d472] font-semibold pt-1'
                      : log.includes('✓')
                      ? 'text-[#22d472]'
                      : log.includes('🚀')
                      ? 'text-[#22d472] font-bold py-1'
                      : 'text-[#8e8e8e]'
                  } whitespace-pre-wrap leading-relaxed`}
                >
                  {log}
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-[#212121] dark:border-[#212121] light:border-slate-800 flex items-center justify-between text-xs font-mono text-[#8e8e8e]">
              <span>Exit Status: {currentStageIndex === pipelineStages.length ? '0 (Success)' : isRunning ? 'Executing' : 'Ready'}</span>
              <span>Branch: refs/heads/main</span>
            </div>
          </div>

          {/* Right Pane: Interactive Terminal CLI */}
          <div className="lg:col-span-5 p-4.5 bg-[#0e0e0e] dark:bg-[#0e0e0e] light:bg-slate-900 flex flex-col justify-between h-[320px] sm:h-[340px]">
            <div>
              <div className="flex items-center justify-between pb-2.5 border-b border-[#212121] dark:border-[#212121] light:border-slate-800 text-xs sm:text-sm font-mono text-[#6b6b6b]">
                <span className="font-medium">interactive-shell</span>
                <span className="text-xs text-[#8e8e8e]">Try: help · skills · deploy · certs</span>
              </div>

              {/* Terminal Quick Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2.5 pb-2">
                {['help', 'whoami', 'skills', 'projects', 'certs', 'contact', 'deploy'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => {
                      setCliInput(cmd);
                    }}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#161616] dark:bg-[#161616] light:bg-slate-800 text-[#22d472] border border-[#212121] dark:border-[#212121] light:border-slate-700 hover:border-[#22d472]/50 transition-colors cursor-pointer font-medium"
                  >
                    ${cmd}
                  </button>
                ))}
              </div>

              {/* History stream */}
              <div ref={cliContainerRef} className="overflow-y-auto max-h-[160px] font-mono text-xs sm:text-sm space-y-2 text-[#f2f2f2] pr-1">
                {cliHistory.map((item, index) => (
                  <div key={index} className="space-y-0.5">
                    <div className="text-[#22d472] flex items-center gap-1.5 font-medium">
                      <span className="text-[#6b6b6b]">$</span>
                      <span>{item.command}</span>
                    </div>
                    <div className="text-[#8e8e8e] pl-2.5 text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
                      {item.output}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Line Form */}
            <form onSubmit={handleCliSubmit} className="pt-2.5 border-t border-[#212121] dark:border-[#212121] light:border-slate-800 flex items-center gap-2">
              <span className="text-[#22d472] font-mono text-sm font-bold">&gt;</span>
              <input
                id="interactive-terminal-input"
                type="text"
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                placeholder="Type command ('help', 'deploy', 'skills')..."
                className="flex-1 bg-transparent font-mono text-xs sm:text-sm text-[#f2f2f2] focus:outline-none placeholder:text-[#6b6b6b]"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg bg-[#212121] dark:bg-[#212121] light:bg-slate-800 text-[#22d472] font-mono text-xs font-bold hover:bg-[#22d472] hover:text-[#0a0a0a] transition-colors cursor-pointer"
              >
                EXEC
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
