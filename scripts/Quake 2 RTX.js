
Game.NeedsSteamEmulation = false;
Game.UseGoldberg = false;
Game.HandlerInterval = 100;

Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "q2rtxgame.exe";
//Game.SteamID = "1089130";
Game.GUID = "Quake II RTX";
Game.GameName = "Quake II RTX";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 2;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Quake II RTX";
Game.HasDynamicWindowTitle = false;
//Game.FakeFocus = true;
//Game.FakeFocusInterval = 40000;
//Game.SendFakeFocusMsg = true;
//Game.HookFocus = true;
//Game.SetWindowHook = true;
//Game.Hook.DInputEnabled = false;
//Game.Hook.XInputEnabled = true;
//Game.Hook.UseAlpha8CustomDll = true;
Game.Hook.CustomDllEnabled = false;
//Game.XInputPlusDll = ["xinput1_4.dll", "xinput9_1_0.dll"];
Game.Description =
  "For use with Nucleus Co-op 1.1.0. Run Quake2 RTX separately first and set to windowed before launching via Nucleus. Multiple Keyboard/Mice Only. End key is the default for locking and unlocking inputs to game instances.";
Game.KeepSymLinkOnExit = true;
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 15;
//Game.PromptAfterFirstInstance = true;

/*
Game.SupportsMultipleKeyboardsAndMice = true;

Game.HookSetCursorPos = false;
Game.HookGetCursorPos = true;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = true;
Game.HookFilterMouseMessages = true;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;

Game.SendNormalMouseInput = true;
Game.SendNormalKeyboardInput = true;
Game.SendScrollWheel = true;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = true;
Game.HookReRegisterRawInputMouse = true;
Game.HookReRegisterRawInputKeyboard = true;
Game.DrawFakeMouseCursor = false;
Game.LockInputAtStart = false;
Game.LockInputToggleKey = 0x23;

*/

//ProtoInput:

Game.SupportsMultipleKeyboardsAndMice = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = true;
Game.ProtoInput.GetAsyncKeyStateHook = true;
Game.ProtoInput.GetKeyboardStateHook = true;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = true;

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = true;
Game.ProtoInput.MouseActivateFilter = true;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = false;

Game.ProtoInput.EnableFocusMessageLoop = false;
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS



Game.Play = function() {
  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\baseq2\\q2config.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "seta vid_geometry", Nucleus.SearchType.StartsWith) + '|seta vid_geometry "' + Context.Width + "x" + Context.Height + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta name ", Nucleus.SearchType.StartsWith) + '|seta name "' + Context.Nickname + '"'
    //Context.FindLineNumberInTextFile(txtPath, "seta vid_fullscreen ", Nucleus.SearchType.StartsWith) + '|seta vid_fullscreen "' + '1' + '"'
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  };
