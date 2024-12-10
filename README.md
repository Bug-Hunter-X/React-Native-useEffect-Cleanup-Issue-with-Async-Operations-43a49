# React Native useEffect Cleanup Issue

This repository demonstrates a common issue with the `useEffect` hook in React Native when dealing with asynchronous operations.  The problem lies in the inconsistent execution of the cleanup function within `useEffect` when a component is unmounted before the asynchronous operation completes. This can result in unexpected behavior and potential errors.

**Problem:** Asynchronous operations (like network requests) can take time. If a component unmounts before the operation finishes, the cleanup function might not be called, leading to issues such as memory leaks or race conditions.

**Solution:** Employing a technique to ensure the cleanup function is reliably executed, even during component unmounting.  This example shows a solution using a ref and conditional cleanup.