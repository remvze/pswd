import { Container } from '@/components/container';
import { useCopy } from '@/hooks/use-copy';
import { useGeneratorSettings } from '@/hooks/use-generator-settings';
import { usePasswordGenerator } from '@/hooks/use-password-generator';
import { useUrlParamsInit } from '@/hooks/use-url-params-init';

import { DicewareTabPanel } from './diceware-tab-panel';
import { GeneratorTabs } from './generator-tabs';
import { NormalTabPanel } from './normal-tab-panel';
import { PasswordResult } from './password-result';
import { PinTabPanel } from './pin-tab-panel';
import styles from './app.module.css';

export function App() {
  const { copy, copying } = useCopy();
  const settings = useGeneratorSettings();

  useUrlParamsInit({
    setActiveTab: settings.setActiveTab,
    setLength: settings.setLength,
    setWordCount: settings.setWordCount,
  });

  const {
    generatePassword,
    isStrengthVisible,
    password,
    strength,
    strengthColor,
  } = usePasswordGenerator(settings);

  return (
    <Container>
      <div className={styles.generator}>
        <GeneratorTabs
          activeTab={settings.activeTab}
          onChange={settings.setActiveTab}
        />

        <PasswordResult
          copying={copying}
          isStrengthVisible={isStrengthVisible}
          password={password}
          showPassword={settings.showPassword}
          strength={strength}
          strengthColor={strengthColor}
          onCopy={() => copy(password)}
          onGenerate={generatePassword}
          onToggleVisibility={() => settings.setShowPassword(prev => !prev)}
        />

        {settings.activeTab === 'normal' && (
          <NormalTabPanel
            customSymbols={settings.customSymbols}
            excludeSimilar={settings.excludeSimilar}
            excludeSymbols={settings.excludeSymbols}
            includeLower={settings.includeLower}
            includeNumbers={settings.includeNumbers}
            includeSymbols={settings.includeSymbols}
            includeUpper={settings.includeUpper}
            length={settings.length}
            selectedPresetId={settings.selectedPresetId}
            applyPreset={patch => {
              settings.setLength(patch.length);
              settings.setIncludeUpper(patch.includeUpper);
              settings.setIncludeLower(patch.includeLower);
              settings.setIncludeNumbers(patch.includeNumbers);
              settings.setIncludeSymbols(patch.includeSymbols);
              settings.setExcludeSimilar(patch.excludeSimilar);
              settings.setCustomSymbols(patch.customSymbols);
              settings.setExcludeSymbols(patch.excludeSymbols);
            }}
            onCustomSymbolsChange={settings.setCustomSymbols}
            onExcludeSimilarChange={settings.setExcludeSimilar}
            onExcludeSymbolsChange={settings.setExcludeSymbols}
            onIncludeLowerChange={settings.setIncludeLower}
            onIncludeNumbersChange={settings.setIncludeNumbers}
            onIncludeSymbolsChange={settings.setIncludeSymbols}
            onIncludeUpperChange={settings.setIncludeUpper}
            onLengthChange={settings.setLength}
            onPresetChange={settings.setSelectedPresetId}
          />
        )}

        {settings.activeTab === 'diceware' && (
          <DicewareTabPanel
            capitalize={settings.capitalize}
            customWordlist={settings.customWordlist}
            randomCapitalization={settings.randomCapitalization}
            randomNumberBeginning={settings.randomNumberBeginning}
            randomNumberEnd={settings.randomNumberEnd}
            separator={settings.separator}
            wordCount={settings.wordCount}
            onCapitalizeChange={settings.setCapitalize}
            onCustomWordlistChange={settings.setCustomWordlist}
            onRandomCapitalizationChange={settings.setRandomCapitalization}
            onRandomNumberBeginningChange={settings.setRandomNumberBeginning}
            onRandomNumberEndChange={settings.setRandomNumberEnd}
            onSeparatorChange={settings.setSeparator}
            onWordCountChange={settings.setWordCount}
          />
        )}

        {settings.activeTab === 'pin' && (
          <PinTabPanel
            pinLength={settings.pinLength}
            onPinLengthChange={settings.setPinLength}
          />
        )}
      </div>

      <p className={styles.donate}>
        Support me with a <a href="https://buymeacoffee.com/remvze">donation</a>
        .
      </p>
    </Container>
  );
}
