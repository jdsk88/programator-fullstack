# programator-fullstack

echo "# programator-fullstack" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:ev45ive/programator-fullstack.git
git push -u origin master
                
# Fork
# Clone your fork
git clone https://github.com/<nazwa>/programator-fullstack
cd programator-fullstack

git remote
> origin

git remote show origin
> origin ... https://github.com/<nazwa>/programator-fullstack

git remote add matt https://github.com/ev45ive/programator-fullstack.git 
git remote 
> origin
> matt

# Pull changes from `matt` to master and track
git pull matt -t master

# Frontend
create-react-app frontend

# Backend
npm init -y
npm i express 

.gitignore

# Watching for changes
https://github.com/remy/nodemon#nodemon

npm run watch

# Branches
git checkout -b 7_products-routes