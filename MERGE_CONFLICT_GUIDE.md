# Resolving Merge Conflicts for Sally's Portfolio

When GitHub says "This branch has conflicts", it means both branches edited the same
section of a file and Git can no longer decide which version you want. Follow the
steps below to resolve the conflict safely.

## 1. Open the conflict editor
1. Go to your pull request on GitHub.
2. Click **Resolve conflicts**. GitHub will open an editor that shows each conflict
   block.

Each conflict block looks like this:

```
<<<<<<< Current change
...your branch's version...
=======
...main branch's version...
>>>>>>> Incoming change
```

- The block between `<<<<<<<` and `=======` is what **your branch** currently has.
- The block between `=======` and `>>>>>>>` is what **the base branch** (usually
  `main`) contains.

If you click **Accept both changes** without editing, GitHub will keep **both**
versions, so the content will be duplicated on the page.

## 2. Decide what to keep
1. Read both versions carefully.
2. Choose the version you want to keep, or merge the pieces manually into a single
   clean block.
3. Delete the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) and any duplicate
   or obsolete lines.

For example, if you only need the floating icon markup once, keep just the
preferred copy and remove the other plus the markers.

## 3. Mark the conflict as resolved
1. When the block looks correct, click **Mark as resolved** in GitHub.
2. Repeat for every conflicting file.
3. When all conflicts are resolved, click **Commit merge** to create the
   resolution commit.

The PR will now show "This branch has no conflicts with the base branch", and you
can merge it normally.
