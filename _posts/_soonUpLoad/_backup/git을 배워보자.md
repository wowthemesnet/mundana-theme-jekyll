- Task : git branch rename from SpellOnYou-patch-1 to patch-1

git branch -m SpellOnYou-patch-1 patch-1
error: refname refs/heads/SpellOnYou-patch-1 not found
fatal: Branch rename failed

*faill*

---

git checkout SpellOnYou-patch-1
Branch 'SpellOnYou-patch-1' set up to track remote branch 'SpellOnYou-patch-1' from 'origin'.
Switched to a new branch 'SpellOnYou-patch-1'

git branch -m SpellOnYou-patch-1 patch-1

*success*

해당 브런치 내에 있어야 reference name, i.e. head를 찾을 수 있는 것...?

---

# Rename the local branch to the new name
git branch -m <old_name> <new_name>

# Delete the old branch on remote - where <remote> is, for example, origin
git push <remote> --delete old_name

# Push the new branch to remote
git push <remote> new_name

---

아래는 실행 X
# if you want Reset the upstream branch for the new_name local branch
git push <remote> -u new-name

---

