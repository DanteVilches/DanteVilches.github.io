"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RotateCcw, Dice1 as Dice12, Minus } from "lucide-react"

export default function DiceGame() {
  const [numPlayers, setNumPlayers] = useState(1)
  const [scores, setScores] = useState([0, 0])
  const [gameStarted, setGameStarted] = useState(false)
  const [diceResult, setDiceResult] = useState<number | null>(null)
  const [showDiceModal, setShowDiceModal] = useState(false)
  const [player1Name, setPlayer1Name] = useState("Player 1")
  const [player2Name, setPlayer2Name] = useState("Player 2")
  const [editingPlayer, setEditingPlayer] = useState<number | null>(null)
  const [tempName, setTempName] = useState("")

  const handlePlayerSelection = (num: number) => {
    setNumPlayers(num)
    setScores([0, 0])
    setGameStarted(true)
  }

  const rollDice = () => {
    setDiceResult(Math.floor(Math.random() * 12) + 1)
    setShowDiceModal(true)
  }

  const substractScore = (playerIndex: number) => {
    const newScores = [...scores]
    if (newScores[playerIndex] > 0) {
      newScores[playerIndex] -= 1
    }
    setScores(newScores)
  }

  const resetScores = () => {
    setScores([0, 0])
    setDiceResult(null)
  }

  const addScore = (playerIndex: number) => {
    const newScores = [...scores]
    if (newScores[playerIndex] < 12) { // Asumo límite 12 según tu código anterior
      newScores[playerIndex] += 1
    }
    setScores(newScores)
  }

  const startEditingName = (playerIndex: number, currentName: string) => {
    setEditingPlayer(playerIndex)
    setTempName(currentName)
  }

  const saveName = (playerIndex: number) => {
    if (playerIndex === 0) {
      setPlayer1Name(tempName || "Player 1")
    } else {
      setPlayer2Name(tempName || "Player 2")
    }
    setEditingPlayer(null)
  }

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold text-white mb-8">Score Tracker</h1>
          <div className="space-y-4">
            <p className="text-gray-300 text-lg">Select number of players:</p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => handlePlayerSelection(1)}
                className="px-8 py-6 text-xl bg-blue-500 hover:bg-blue-600"
              >
                1 Player
              </Button>
              <Button
                onClick={() => handlePlayerSelection(2)}
                className="px-8 py-6 text-xl bg-blue-500 hover:bg-blue-600"
              >
                2 Players
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col h-screen">
      
      {/* --- BARRA SUPERIOR (PLAYER 1 + CONTROLES) --- */}
      <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
        
        {/* IZQUIERDA: Nombre Player 1 */}
        <div className="flex-1 flex justify-start">
          {editingPlayer === 0 ? (
            <input
              autoFocus
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              onBlur={() => saveName(0)}
              onKeyDown={(e) => e.key === "Enter" && saveName(0)}
              className="px-2 py-1 bg-slate-700 text-white rounded text-sm border border-blue-500 w-24 sm:w-auto"
            />
          ) : (
            <button
              onClick={() => startEditingName(0, player1Name)}
              className="px-3 py-1 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded text-left truncate max-w-[120px]"
            >
              {player1Name}
            </button>
          )}
        </div>

        {/* CENTRO: Botón Restar P1 */}
        <div className="flex justify-center px-2">
            <Button 
                onClick={() => substractScore(0)}
                size="icon"
                className="bg-slate-700 hover:bg-red-900/50 text-blue-300 hover:text-red-200 border border-slate-600 rounded-full w-10 h-10"
            >
                <Minus className="w-6 h-6" />
            </Button>
        </div>

        {/* DERECHA: Controles del Juego */}
        <div className="flex-1 flex justify-end gap-2">
            <Button onClick={rollDice} className="bg-slate-700 hover:bg-slate-600 text-gray-300 px-3 py-2 text-sm">
                <Dice12 className="w-4 h-4" />
            </Button>
            <Button
                onClick={() => setGameStarted(false)}
                className="bg-slate-600 hover:bg-slate-500 text-white text-sm px-3 py-2"
            >
                Change
            </Button>
            <Button onClick={resetScores} size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                <RotateCcw className="w-4 h-4" />
            </Button>
        </div>
      </div>

      {/* --- ÁREA PRINCIPAL DE JUEGO --- */}
      <div className="flex-1 flex flex-col">
        {/* Player 1 - Tap to score */}
        <div
          className="flex-1 bg-gradient-to-br from-blue-900 to-blue-950 flex flex-col items-center justify-center cursor-pointer active:bg-blue-800 transition-colors relative"
          onClick={() => addScore(0)}
        >
          <p className="text-6xl font-bold text-blue-300 mb-4">{scores[0]}</p>
          <p className="text-gray-400">Tap to add +1</p>
          {scores[0] === 12 && <p className="text-yellow-400 text-sm mt-4 absolute bottom-4">Max reached!</p>}
        </div>

        {/* Player 2 - Tap to score */}
        {numPlayers === 2 && (
          <div
            className="flex-1 bg-gradient-to-br from-purple-900 to-purple-950 flex flex-col items-center justify-center cursor-pointer active:bg-purple-800 transition-colors relative"
            onClick={() => addScore(1)}
          >
            <p className="text-6xl font-bold text-purple-300 mb-4">{scores[1]}</p>
            <p className="text-gray-400">Tap to add +1</p>
            {scores[1] === 12 && <p className="text-yellow-400 text-sm mt-4 absolute bottom-4">Max reached!</p>}
          </div>
        )}
      </div>

      {/* --- BARRA INFERIOR (SOLO PLAYER 2) --- */}
      {numPlayers === 2 && (
        <div className="bg-slate-800 p-4 border-t border-slate-700 flex justify-between items-center">
          
          {/* IZQUIERDA: Nombre Player 2 */}
          <div className="flex-1 flex justify-start">
            {editingPlayer === 1 ? (
                <input
                autoFocus
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                onBlur={() => saveName(1)}
                onKeyDown={(e) => e.key === "Enter" && saveName(1)}
                className="px-2 py-1 bg-slate-700 text-white rounded text-sm border border-purple-500 w-24 sm:w-auto"
                />
            ) : (
                <button
                onClick={() => startEditingName(1, player2Name)}
                className="px-3 py-1 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded text-left truncate max-w-[120px]"
                >
                {player2Name}
                </button>
            )}
          </div>

          {/* CENTRO: Botón Restar P2 */}
          <div className="flex justify-center px-2">
            <Button 
                onClick={() => substractScore(1)}
                size="icon"
                className="bg-slate-700 hover:bg-red-900/50 text-purple-300 hover:text-red-200 border border-slate-600 rounded-full w-10 h-10"
            >
                <Minus className="w-6 h-6" />
            </Button>
          </div>

          {/* DERECHA: Espacio vacío para equilibrar (Spacer) */}
          <div className="flex-1"></div>
        </div>
      )}

      {showDiceModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowDiceModal(false)}
        >
          <div className="bg-gradient-to-br from-amber-900 to-amber-950 rounded-lg p-12 text-center shadow-2xl">
            <p className="text-7xl font-bold text-amber-300">{diceResult}</p>
            <p className="text-gray-400 text-sm mt-4">Tap anywhere to close</p>
          </div>
        </div>
      )}
    </div>
  )
}