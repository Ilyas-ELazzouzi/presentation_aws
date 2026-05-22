export interface TeamMember {
  name: string
  role: string
}

export interface Objective {
  title: string
  description: string
  icon: string
}

export interface LintTool {
  name: string
  scope: string
  config: string
}

export interface TrivyRow {
  image: string
  critical: number
  high: number
  medium: number
  low: number
}

export interface Challenge {
  problem: string
  solution: string
}

export interface TimelineStep {
  label: string
  detail: string
}

export interface VariableCard {
  name: string
  masked: string
  protected: boolean
}

export const teamData: TeamMember[] = [
  { name: 'Alexandre Martin', role: 'Pipeline & CI/CD' },
  { name: 'Sarah Dubois', role: 'Sécurité & Trivy' },
  { name: 'Lucas Bernard', role: 'Build & Docker' },
  { name: 'Emma Petit', role: 'AWS ECR & Déploiement' },
]

export const codeSnippets = {
  gitlabCi: `stages:
  - lint
  - test
  - build
  - push
include:
  - local: ci/pipeline.yml`,

  pipelineYml: `compose-lint:
  stage: lint
  script:
    - docker compose -f docker-compose.yml config
hadolint:
  stage: lint
  script:
    - hadolint backend/Dockerfile`,

  trivyTest: `trivy-scan:
  stage: test
  parallel:
    matrix:
      - IMAGE: frontend
      - IMAGE: backend
      - IMAGE: nginx
      - IMAGE: devops`,

  loginEcr: `aws-ecr-login:
  script:
    - aws ecr get-login-password \\
      --region $AWS_DEFAULT_REGION \\
      | docker login --username AWS \\
        --password-stdin $ECR_REGISTRY`,

  pushFrontend: `push-frontend:
  stage: push
  script:
    - docker tag $IMAGE:$CI_COMMIT_SHA \\
        $ECR_REGISTRY/hetic-frontend:$CI_COMMIT_SHA
    - docker push $ECR_REGISTRY/hetic-frontend:$CI_COMMIT_SHA`,

  nginxConf: `build-images:
  services:
    - docker:24-dind
  script:
    - docker compose build frontend backend nginx`,
}

export const trivyMatrix: TrivyRow[] = [
  { image: 'hetic-frontend', critical: 0, high: 1, medium: 3, low: 7 },
  { image: 'hetic-backend', critical: 0, high: 0, medium: 2, low: 5 },
  { image: 'hetic-nginx', critical: 0, high: 0, medium: 1, low: 2 },
  { image: 'hetic-devops', critical: 0, high: 2, medium: 4, low: 9 },
]

export const pipelineChartData = [
  { name: 'Lint', value: 15, color: '#F59E0B' },
  { name: 'Test', value: 35, color: '#10B981' },
  { name: 'Build', value: 35, color: '#3B82F6' },
  { name: 'Push', value: 15, color: '#7C3AED' },
]

export const objectives: Objective[] = [
  {
    title: 'Automatiser le pipeline',
    description: 'Lint, test, build et push déclenchés à chaque merge sur main.',
    icon: '⚡',
  },
  {
    title: 'Sécuriser les images',
    description: 'Scan Trivy systématique avec matrice sur les 4 images Docker.',
    icon: '🛡️',
  },
  {
    title: 'Publier sur AWS ECR',
    description: 'Push multi-branches vers les dépôts frontend, backend et devops.',
    icon: '☁️',
  },
]

export const challenges: Challenge[] = [
  {
    problem: 'Docker-in-Docker instable sur les runners partagés GitLab.',
    solution: 'Service dind dédié + DOCKER_TLS_CERTDIR désactivé pour le job build.',
  },
  {
    problem: 'Authentification ECR expirée pendant les jobs longs.',
    solution: 'Renouvellement aws ecr get-login-password avant chaque push par branche.',
  },
  {
    problem: 'Faux positifs Trivy sur les images de base Alpine.',
    solution: 'Fichier .trivyignore versionné + seuils CVSS par environnement.',
  },
]

export const lintTools: LintTool[] = [
  { name: 'compose-lint', scope: 'docker-compose.yml', config: 'ci/lint.yml' },
  { name: 'hadolint', scope: 'Dockerfiles', config: 'backend/Dockerfile' },
  { name: 'yamllint', scope: 'Fichiers YAML CI', config: '.yamllint' },
  { name: 'shellcheck', scope: 'Scripts shell', config: 'scripts/*.sh' },
]

export const lintNote =
  'Les jobs applicatifs (eslint, pytest) s\'exécutent en stage test, distinct du lint infrastructure.'

export const pipelineStages = [
  {
    id: 'lint',
    label: 'LINT',
    color: '#F59E0B',
    jobs: ['compose-lint', 'hadolint', 'yamllint', 'shellcheck'],
  },
  {
    id: 'test',
    label: 'TEST',
    color: '#10B981',
    jobs: ['unit-tests', 'trivy-scan', 'integration'],
  },
  {
    id: 'build',
    label: 'BUILD',
    color: '#3B82F6',
    jobs: ['dind-build', 'compose-build'],
  },
  {
    id: 'push',
    label: 'PUSH',
    color: '#7C3AED',
    jobs: ['ecr-frontend', 'ecr-backend', 'ecr-devops'],
  },
]

export const variableCards: VariableCard[] = [
  { name: 'AWS_ACCESS_KEY_ID', masked: '••••••AKIA', protected: true },
  { name: 'AWS_SECRET_ACCESS_KEY', masked: '••••••••••••', protected: true },
  { name: 'ECR_REGISTRY', masked: '••••••.dkr.ecr', protected: true },
]

export const timelineSteps: TimelineStep[] = [
  { label: 'Analyse', detail: 'Audit du monorepo' },
  { label: 'Lint', detail: '4 outils en parallèle' },
  { label: 'Sécurité', detail: 'Matrice Trivy' },
  { label: 'Build', detail: 'DinD + compose' },
  { label: 'Push', detail: '3 repos ECR' },
]

export const conclusionQuote =
  'Un pipeline DevOps robuste ne se mesure pas à la vitesse du build, mais à la confiance qu\'on peut avoir à chaque merge.'

export const bilanPoints = [
  'Pipeline GitLab CI en 4 stages avec jobs parallèles',
  'Scan Trivy sur 4 images avec reporting par sévérité',
  'Publication automatisée vers 3 dépôts AWS ECR',
  'Variables protégées et branches main/develop',
]

export const nextSteps = [
  'Déploiement ECS/Fargate depuis les images ECR',
  'Environnements review apps par MR',
  'Notifications Slack sur échec de pipeline',
  'Rotation automatique des credentials AWS',
]

export const TOTAL_SLIDES = 14
